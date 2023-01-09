import Container from "../components/Container";
import Pills from "../components/Pills";
import BlogListItem from "../components/BlogListItem";
import {
  FrontmatterWithEstReadTime,
  getBlogPostFrontmatters,
} from "../lib/mdx";

const toSetReducer = (
  acc: Set<string>,
  frontmatter: FrontmatterWithEstReadTime
) => {
  frontmatter.tags.forEach((tag) => acc.add(tag));
  return acc;
};

const Blog: React.FC<{ frontmatters: FrontmatterWithEstReadTime[] }> = ({
  frontmatters,
}) => {
  frontmatters.sort((a, b) => (a.postedIsoDate > b.postedIsoDate ? -1 : 1));
  const tags = Array.from(frontmatters.reduce(toSetReducer, new Set()));
  tags.sort((a, b) => (a >= b ? 1 : -1));

  return (
    <Container>
      <h1 className="pb-6 text-3xl font-bold">Blog</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Browse by tags</h2>
        <Pills
          pills={tags.map((tag) => ({
            pillKey: `${tag}-blog-index-tag-list`,
            pillText: tag,
          }))}
        />
        <h2 className="text-2xl font-bold">All Posts</h2>
        {frontmatters.map((frontmatter) => (
          <BlogListItem
            {...frontmatter}
            key={`${frontmatter.slug}-list-item`}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const frontmatters = await getBlogPostFrontmatters();

  return { props: { frontmatters } };
};

export default Blog;
