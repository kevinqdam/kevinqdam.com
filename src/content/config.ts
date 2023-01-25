import { z, defineCollection } from 'astro:content';

/**
 * Pattern that matches yyyy-mm-dd
 */
const isoDatePattern = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

const blogCollection = defineCollection({
  schema: z
    .object({
      author: z.enum(['Kevin Dam', 'Bagel Cat', 'Ponzu Dog']),
      authorProfileImage: z
        .object({
          alt: z.string(),
          src: z.string(),
        })
        .optional(),
      posted: z.string().regex(isoDatePattern),
      preview: z.string(),
      title: z.string(),
      tags: z.array(z.string()),
      thumbnailImage: z
        .object({
          alt: z.string(),
          src: z.string(),
        })
        .optional(),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
