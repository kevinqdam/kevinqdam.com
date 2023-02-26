import { DateTime } from 'luxon';
import type React from 'react';
import Pills, { Pill } from './Pills';

export type BlogPostCardProps = {
  author: string;
  authorProfileImage: { alt: string; src: string } | undefined;
  posted: string;
  title: string;
  preview: string;
  thumbnailImage: { alt: string; src: string } | undefined;
  tags: Pill[];
  slug: string;
  estReadTimeMinutes: string;
};

type AuthorProfileImageProps = {
  src: string;
  alt: string;
};

type ThumbnailImageProps = {
  src: string;
  alt: string;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  author,
  authorProfileImage,
  posted,
  title,
  preview,
  thumbnailImage,
  tags,
  estReadTimeMinutes,
  slug,
}) => {
  const postedDateTime = DateTime.fromISO(posted);
  tags = [...tags].sort((a, b) => a.text > b.text ? 1 : -1);

  return (
    <div className='flex flex-col space-y-4 lg:space-y-2 rounded-lg bg-white shadow p-4 dark:bg-slate-900 dark:shadow-lg'>
      <div className='flex flex-row items-center space-x-2 pb-2'>
        {authorProfileImage && (
          <AuthorProfileImage
            src={authorProfileImage.src}
            alt={authorProfileImage.alt}
          />
        )}
        {/* Mobile */}
        <div className='flex sm:hidden flex-col'>
          <span className='font-semibold'>{author}</span>
          <div className='flex flex-wrap flex-row gap-1 text-sm text-gray-600 dark:text-gray-200'>
            <span>
              {`${postedDateTime.monthShort}. ${postedDateTime.day}, ${postedDateTime.year}`}
            </span>
            {estReadTimeMinutes && (
              <>
                <span>•</span>
                <span className='text-gray-600 dark:text-gray-200'>
                  {estReadTimeMinutes}
                </span>
              </>
            )}
          </div>
        </div>
        {/* Desktop and tablet */}
        <div className='hidden sm:flex flex-col'>
          <span className="font-semibold">{author}</span>
          <div className='hidden sm:flex flex-wrap flex-row gap-2 text-gray-600 dark:text-gray-200'>
            <span>
              {`${postedDateTime.monthLong} ${postedDateTime.day}, ${postedDateTime.year}`}
            </span>
            {estReadTimeMinutes && (
              <>
                <span>•</span>
                <span className='text-gray-600 dark:text-gray-200'>
                  {estReadTimeMinutes}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      {thumbnailImage && (
        <a
          href={`/blog/${slug}`}
          className='lg:hidden flex min-w-fit min-h-fit'
        >
          <ThumbnailImage src={thumbnailImage.src} alt={thumbnailImage.alt} />
        </a>
      )}
      <div className='flex flex-row space-x-4 pb-2'>
        <div className='flex flex-col space-y-2'>
          <a href={`/blog/${slug}`}>
            <h3 className='text-xl font-bold hover:underline'>{title}</h3>
          </a>
          <div className='overflow-hidden'>
            <p className='italic text-gray-500 line-clamp-4 dark:text-gray-400'>
              {preview}
            </p>
          </div>
        </div>
        {thumbnailImage && (
          <a href={`/blog/${slug}`} className='hidden lg:flex min-w-fit'>
            <ThumbnailImage src={thumbnailImage.src} alt={thumbnailImage.alt} />
          </a>
        )}
      </div>
      <div className='flex flex-col space-y-6 lg:flex-row lg:items-center lg:align-middle lg:space-x-2'>
        {tags && tags.length && (
          <div className='flex flex-row space-x-2'>
            <span className='text-gray-600 dark:text-gray-200'>Tags: </span>
            <Pills pills={tags} />
          </div>
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
    <img
      alt={alt}
      height={44}
      width={44}
      src={src}
      className='rounded-full bg-gradient-to-r from-slate-500 to-teal-500 p-0.5 filter dark:from-slate-500 dark:to-rose-500'
    />
  );
};

const ThumbnailImage: React.FC<ThumbnailImageProps> = ({ alt, src }) => {
  return (
    <img
      alt={alt}
      src={src}
      className='rounded-lg object-cover filter lg:w-36 lg:h-36'
    />
  );
};

export default BlogPostCard;
