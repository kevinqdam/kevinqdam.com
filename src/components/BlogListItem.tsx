import { DateTime } from "luxon";
import Image from "next/image";
import { ReactElement } from "react";

type AuthorProfileImageProps = {
  alt: string;
  src: string;
};

type ThumbnailImageProps = {
  alt: string;
  src: string;
};

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

export const AuthorProfileImage: React.FC<AuthorProfileImageProps> = ({
  alt,
  src,
}) => {
  return (
    <Image
      alt={alt}
      height={30}
      width={30}
      src={src}
      priority
      className="rounded-full bg-gradient-to-r from-slate-500 to-teal-500 p-0.5 filter dark:from-slate-500 dark:to-rose-500"
    />
  );
};

export const ThumbnailImage: React.FC<ThumbnailImageProps> = ({ alt, src }) => {
  return (
    <Image
      alt={alt}
      height={144}
      width={144}
      src={src}
      priority
      className="rounded-lg object-cover filter"
    />
  );
};

export default BlogListItem;
