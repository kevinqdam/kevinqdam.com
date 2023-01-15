import { DateTime } from "luxon";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import readingTime from "reading-time";
import Container from "../../components/Container";
import {
  Frontmatter,
  getBlogPostBySlug,
  getBlogPostPaths,
} from "../../lib/mdx";

type StaticBlogParams = { params: { slug: string } };
type StaticBlogPaths = { paths: StaticBlogParams[]; fallback: boolean };
type StaticBlogProps = {
  props: BlogPostProps;
};
type BlogPostProps = {
  code: string;
  frontmatter: Frontmatter;
  estReadTimeMinutes: number;
};

const BlogPost: React.FC<BlogPostProps> = ({
  code,
  frontmatter,
  estReadTimeMinutes,
}) => {
  const BundledBlogPost = getMDXComponent(code);
  const {
    author,
    authorProfileImageAlt,
    authorProfileImageSrc,
    postedIsoDate,
  } = frontmatter;
  const posted = DateTime.fromISO(postedIsoDate);

  return (
    <Container>
      <div className="flex flex-row items-center space-x-2 pb-4">
        <Image
          alt={authorProfileImageAlt}
          height={50}
          width={50}
          src={authorProfileImageSrc}
          priority
          className="rounded-full bg-gradient-to-r from-slate-500 to-teal-500 p-0.5 filter dark:from-slate-500 dark:to-rose-500"
        />
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {author}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {`${posted.monthLong} ${posted.day}, ${posted.year}`} •{" "}
            {`${estReadTimeMinutes} min read`}
          </span>
        </div>
      </div>
      <article className="prose dark:prose-invert prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold">
        <BundledBlogPost />
      </article>
    </Container>
  );
};

export const getStaticPaths = async (): Promise<StaticBlogPaths> => {
  const postPaths = getBlogPostPaths();

  return {
    paths: postPaths.map((postPath) => ({
      params: {
        slug: postPath.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: StaticBlogParams): Promise<StaticBlogProps> => {
  const { code, frontmatter, source } = await getBlogPostBySlug(slug);
  const estReadTimeMinutes = Math.ceil(readingTime(source).minutes);

  return {
    props: {
      code,
      frontmatter: frontmatter as Frontmatter,
      estReadTimeMinutes,
    },
  };
};

export default BlogPost;
