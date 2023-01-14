import fs from "fs";
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
            properties: {
              className: ['anchor'],
              behavior: 'append',
            }
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
