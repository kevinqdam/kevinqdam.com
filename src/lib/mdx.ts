import fs from "fs";
import { h } from 'hastscript';
import { bundleMDX } from "mdx-bundler";
import path from "path";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export type Frontmatter = {
  author: string;
  authorProfileImageSrc: string;
  authorProfileImageAlt: string;
  postedIsoDate: string;
  title: string;
  preview: string;
  thumbnailImageSrc: string;
  thumbnailImageAlt: string;
  tags: string[];
  slug: string;
};

export type FrontmatterWithEstReadTime = Frontmatter & {
  estReadTimeMinutes: number;
};

const AnchorLinkIcon = h(
  'svg',
  {
    width: 16,
    height: 16,
    version: 1.1,
    viewBox: '0 0 16 16',
    xlmns: 'http://www.w3.org/2000/svg',
  },
  h('path', {
    fillRule: 'evenodd',
    fill: 'currentcolor',
    d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
  })
);

const root = process.cwd();

const blogFileNameToFrontMatter = async (
  blogFileName: string
): Promise<FrontmatterWithEstReadTime> => {
  const mdxSource = fs
    .readFileSync(path.join(root, "src", "data", "blog", blogFileName))
    .toString();
  const frontmatter = (
    await bundleMDX({
      source: mdxSource,
    })
  ).frontmatter as Frontmatter;
  const estReadTimeMinutes = Math.ceil(readingTime(mdxSource).minutes);

  return { ...frontmatter, estReadTimeMinutes };
};

const isFulfilled = <T>(
  settledPromise: PromiseSettledResult<T>
): settledPromise is PromiseFulfilledResult<T> =>
  settledPromise.status === "fulfilled";

export const getBlogPostPaths = () =>
  fs.readdirSync(path.join(root, "src", "data", "blog"));

export const getBlogPostBySlug = async (slug: string) => {
  const mdxSource = fs
    .readFileSync(path.join(root, "src", "data", "blog", `${slug}.mdx`))
    .toString();
  const bundledMDX = await bundleMDX({
    source: mdxSource,
    mdxOptions: (options) => {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: {
              ariaHidden: true,
              tabIndex: -1,
              className: ['heading-anchor'],
            },
            content: [AnchorLinkIcon]
          }
        ]
      ];
      return options;
    },
  });

  return {
    ...bundledMDX,
    source: mdxSource,
  };
};

export const getBlogPostFrontmatters = async () => {
  const blogFileNames = fs.readdirSync(path.join(root, "src", "data", "blog"));
  const settledPromises = await Promise.allSettled(
    blogFileNames.map(blogFileNameToFrontMatter)
  );

  return settledPromises.filter(isFulfilled).map((promise) => promise.value);
};
