import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import { Frontmatter } from "../lib/mdx";
import Pills from "./Pills";

type AuthorProfileImageProps = {
  src: string;
  alt: string;
};

type ThumbnailImageProps = {
  src: string;
  alt: string;
};

const BlogListItem: React.FC<Frontmatter & { estReadTimeMinutes: number }> = ({
  author,
  authorProfileImageSrc,
  authorProfileImageAlt,
  postedIsoDate,
  title,
  preview,
  thumbnailImageSrc,
  thumbnailImageAlt,
  tags,
  estReadTimeMinutes,
  slug,
}) => {
  const posted = DateTime.fromISO(postedIsoDate);

  return (
    <div className="flex flex-col space-y-2 rounded-lg bg-slate-200 p-4 dark:bg-slate-900">
      <div className="flex flex-row items-center space-x-2 pb-2">
        <AuthorProfileImage
          src={authorProfileImageSrc}
          alt={authorProfileImageAlt}
        />
        <span className="text-sm text-gray-600 dark:text-gray-200">
          {author} • {`${posted.monthLong} ${posted.day}, ${posted.year}`}
        </span>
      </div>
      <div className="flex flex-row space-x-4 pb-2">
        <div className="flex flex-col space-y-2">
          <Link href={`/blog/${slug}`}>
            <h3 className="text-xl font-bold hover:underline">{title}</h3>
          </Link>
          <div className="overflow-hidden">
            <p className="italic text-gray-500 line-clamp-4 dark:text-gray-400">
              {preview}
            </p>
          </div>
        </div>
        {thumbnailImageSrc && (
          <Link href={`/blog/${slug}`} className="flex min-w-fit">
            <ThumbnailImage src={thumbnailImageSrc} alt={thumbnailImageAlt} />
          </Link>
        )}
      </div>
      <div className="flex flex-row items-center space-x-2">
        {tags && tags.length && (
          <div className="flex flex-row space-x-1">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Tags:{" "}
            </span>
            <Pills
              pills={tags.map((tag) => ({
                pillKey: `${slug}-${tag}`,
                pillText: tag,
              }))}
            />
          </div>
        )}
        {estReadTimeMinutes && (
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {estReadTimeMinutes} min read
          </span>
        )}
      </div>
    </div>
  );
};

const AuthorProfileImage: React.FC<AuthorProfileImageProps> = ({
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

const ThumbnailImage: React.FC<ThumbnailImageProps> = ({ alt, src }) => {
  return (
    <Image
      alt={alt}
      height={144}
      width={144}
      src={src}
      priority
      className="rounded-lg object-cover filter w-36"
    />
  );
};

export default BlogListItem;
