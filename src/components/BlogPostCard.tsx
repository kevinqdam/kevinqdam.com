import { DateTime } from 'luxon';
import Pills, { type Pill } from './Pills';

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

const BlogPostCard = ({
  author,
  authorProfileImage,
  posted,
  title,
  preview,
  thumbnailImage,
  tags,
  estReadTimeMinutes,
  slug,
}: BlogPostCardProps) => {
  const postedDateTime = DateTime.fromISO(posted);
  const sortedTags = [...tags].sort((a, b) => a.text.localeCompare(b.text));

  return (
    <article className={`post-card${thumbnailImage ? '' : ' no-image'}`}>
      {thumbnailImage && (
        <a className="post-card-image-link" href={`/blog/${slug}`} aria-label={`Read ${title}`}>
          <img
            className="post-card-image"
            src={thumbnailImage.src}
            alt={thumbnailImage.alt}
            width="240"
            height="160"
            loading="lazy"
            decoding="async"
          />
        </a>
      )}
      <div className="post-card-body">
        <div className="post-card-meta">
          {authorProfileImage && (
            <img
              className="author-image"
              src={authorProfileImage.src}
              alt={authorProfileImage.alt}
              width="44"
              height="44"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="post-card-meta-copy">
            <span className="post-card-author">{author}</span>
            <div>
              <time dateTime={posted}>
                {postedDateTime.toFormat('MMM d, yyyy')}
              </time>
              {estReadTimeMinutes && <span> · {estReadTimeMinutes}</span>}
            </div>
          </div>
        </div>
        <h3 className="post-card-title">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        <p className="post-card-preview">{preview}</p>
        {sortedTags.length > 0 && <Pills pills={sortedTags} />}
      </div>
    </article>
  );
};

export default BlogPostCard;
