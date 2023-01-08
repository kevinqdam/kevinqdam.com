import Image from "next/image";
import Container from "../components/Container";
import Pills from "../components/Pills";

const BlogListItem: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-slate-200 dark:bg-slate-900 p-4">
      <div className="flex flex-row items-center space-x-2 pb-2">
        <Image
          alt="Kevin Dam profile picture"
          height={30}
          width={30}
          src="/bagel.jpg"
          priority
          className="rounded-full filter"
        />
        <span className="text-sm text-gray-500 dark:text-gray-200">
          Bagel Cat • January 7, 2023
        </span>
      </div>
      <div className="flex flex-row space-x-4 pb-2">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold">
            Food Review: Kirkland Signature 3-Flavor Variety Pack Pâté Wet Cat
            Food for Adult Cats
          </h3>
          <div className="overflow-hidden">
            <p className="italic text-gray-500 line-clamp-4 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Image
          alt="Kirkland Signature cat food"
          height={144}
          width={144}
          src="/kirkland.jpg"
          priority
          className="rounded-lg object-cover filter"
        />
      </div>
      <div className="flex flex-row items-center space-x-2">
        <div className="flex flex-row space-x-1">
          <span className="text-sm text-gray-500 dark:text-gray-200">Tags: </span>
          <Pills
            pills={[{ pillText: "Costco", pillKey: "blog-costco-text-blog" }, { pillText: "Food", pillKey: "blog-food-text-blog" }]}
          />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-200">•</div>
        <span className="text-sm text-gray-500 dark:text-gray-200">360 min read</span>
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
            { pillText: "TypeScript", pillKey: "blog-index-tag-typescript" },
          ]}
        />
        <h2 className="text-2xl font-bold">All Posts</h2>
        <BlogListItem />
      </div>
    </Container>
  );
};

export default Blog;
