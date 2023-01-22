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
