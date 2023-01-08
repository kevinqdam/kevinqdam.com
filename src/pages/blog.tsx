import Image from "next/image";
import Container from "../components/Container";
import Pills from "../components/Pills";
import { DateTime } from "luxon";
import { ReactElement } from "react";

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
      <Image
        alt="Bagel Cat profile picture"
        height={30}
        width={30}
        src="/bagel.jpg"
        priority
        className="rounded-full bg-gradient-to-r from-slate-500 to-teal-500 p-0.5 filter dark:from-slate-500 dark:to-rose-500"
      />
    ),
    posted: DateTime.fromISO("2023-01-07"),
    title:
      "Food Review: Kirkland Signature 3-Flavor Variety Pack Pâté Wet Cat Food for Adult Cats",
    body: LOREM_IPSUM,
    thumbnail: (
      <Image
        alt="Kirkland Signature cat food"
        height={144}
        width={144}
        src="/kirkland.jpg"
        priority
        className="rounded-lg object-cover filter"
      />
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
    slug: "bagel-kirkland-cat-food-review"
  },
  {
    author: "Ponzu Dog",
    authorProfileImage: (
      <Image
        alt="Ponzu Dog profile picture"
        height={30}
        width={30}
        src="/ponzu.jpg"
        priority
        className="rounded-full bg-gradient-to-r from-slate-500 to-teal-500 p-0.5 filter dark:from-slate-500 dark:to-rose-500"
      />
    ),
    posted: DateTime.fromISO("2023-01-07"),
    title:
      "First Walk at Ruben S. Ayala Park",
    body: LOREM_IPSUM,
    thumbnail: (
      <Image
        alt="Ruben S. Ayala park"
        height={144}
        width={144}
        src="/ruben-s-ayala-park.jpeg"
        priority
        className="rounded-lg object-cover filter"
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
    slug: "ponzu-park-review"
  },
];

const BlogListItem: React.FC<BlogListItemProps> = ({
  author,
  authorProfileImage,
  posted,
  title,
  body,
  thumbnail,
  tagPills,
  readTime,
}) => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-slate-200 p-4 dark:bg-slate-900">
      <div className="flex flex-row items-center space-x-2 pb-2">
        <>{authorProfileImage}</>
        <span className="text-sm text-gray-600 dark:text-gray-200">
          {author} • {`${posted.monthLong} ${posted.day}, ${posted.year}`}
        </span>
      </div>
      <div className="flex flex-row space-x-4 pb-2">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="overflow-hidden">
            <p className="italic text-gray-500 line-clamp-4 dark:text-gray-400">
              {body}
            </p>
          </div>
        </div>
        {thumbnail && <>{thumbnail}</>}
      </div>
      <div className="flex flex-row items-center space-x-2">
        {tagPills && (
          <div className="flex flex-row space-x-1">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Tags:{" "}
            </span>
            <>{tagPills}</>
            <div className="text-sm text-gray-600 dark:text-gray-200">•</div>
          </div>
        )}
        {readTime && (
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {readTime} read
          </span>
        )}
      </div>
    </div>
  );
};

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
          <BlogListItem {...props} key={`${props.slug}-list-item`}></BlogListItem>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
