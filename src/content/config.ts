import { z, defineCollection } from 'astro:content';

/**
 * Test href is a valid URL
 */
const isURL = (href: string) => {
  try {
    new URL(href);
  } catch {
    return false;
  }
  return true;
};

/**
 * Pattern that matches yyyy-mm-dd
 */
const isoDatePattern = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

/**
 * Enumeration of known tags
 */
const KNOWN_TAGS = [
  'typescript',
  'personal',
  'life',
  'productivity',
  'travel',
  'pets',
] as const;

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
      tags: z.array(
        z
          .object({
            text: z.enum(KNOWN_TAGS),
            pillHref: z
              .string()
              .refine(isURL, { message: "Tag's href must be a valid URL" })
              .optional(),
          })
          .strict()
      ),
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
