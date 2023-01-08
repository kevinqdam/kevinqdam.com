import Container from "../components/Container";
import Pills from "../components/Pills";
import { DateTime } from "luxon";
import { ReactElement } from "react";
import BlogListItem, {
  AuthorProfileImage,
  ThumbnailImage,
} from "../components/BlogListItem";

type BlogListItemProps = {
  author: string;
  authorProfileImage: ReactElement;
  posted: DateTime;
  title: string;
  body: string;
  thumbnail: ReactElement;
  tagPills: ReactElement;
  readTime: string;
  slug: string;
};

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const BLOG_LIST_ITEMS: BlogListItemProps[] = [
  {
    author: "Bagel Cat",
    authorProfileImage: (
      <AuthorProfileImage alt="Bagel Cat profile picture" src="/bagel.jpg" />
    ),
    posted: DateTime.fromISO("2023-01-07"),
    title:
      "Food Review: Kirkland Signature 3-Flavor Variety Pack Pâté Wet Cat Food for Adult Cats",
    body: LOREM_IPSUM,
    thumbnail: (
      <ThumbnailImage alt="Kirkland Signature cat food" src="/kirkland.jpg" />
    ),
    tagPills: (
      <Pills
        pills={[
          { pillKey: "bagel-food-blog-article", pillText: "Food" },
          { pillKey: "bagel-review-blog-article", pillText: "Review" },
        ]}
      />
    ),
    readTime: "6 hr",
    slug: "bagel-kirkland-cat-food-review",
  },
  {
    author: "Ponzu Dog",
    authorProfileImage: (
      <AuthorProfileImage alt="Ponzu Dog profile picture" src="/ponzu.jpg" />
    ),
    posted: DateTime.fromISO("2023-01-07"),
    title: "First Walk at Ruben S. Ayala Park",
    body: LOREM_IPSUM,
    thumbnail: (
      <ThumbnailImage
        alt="Ruben S. Ayala park"
        src="/ruben-s-ayala-park.jpeg"
      />
    ),
    tagPills: (
      <Pills
        pills={[
          { pillKey: "ponzu-park-park-review-park", pillText: "Park" },
          { pillKey: "ponzu-park-park-review-review", pillText: "Review" },
        ]}
      />
    ),
    readTime: "15 min",
    slug: "ponzu-park-review",
  },
];

const Blog: React.FC = () => {
  return (
    <Container>
      <h1 className="pb-6 text-3xl font-bold">Blog</h1>
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Browse by tags</h2>
        <Pills
          pills={[
            { pillText: "Food", pillKey: "blog-index-tag-food" },
            { pillText: "Review", pillKey: "blog-index-tag-review" },
            { pillText: "Park", pillKey: "blog-index-tag-park" },
          ]}
        />
        <h2 className="text-2xl font-bold">All Posts</h2>
        {BLOG_LIST_ITEMS.map((props) => (
          <BlogListItem {...props} key={`${props.slug}-list-item`} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
