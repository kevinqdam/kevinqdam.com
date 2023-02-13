import { z, defineCollection } from 'astro:content';

/**
 * Enumeration of known tags
 */
const KNOWN_TAGS = [
  'typescript',
  'programming',
  'personal',
  'life',
  'productivity',
  'travel',
  'pets',
] as const;

const KNOWN_TAG_PATHS = KNOWN_TAGS.map((tag) => `/blog/tag/${tag}`);

/**
 * Test href is a valid URL
 */
const isURL = (href: string) => {
  if (KNOWN_TAG_PATHS.find((path) => path === href)) {
    return true;
  }
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
const isoDatePattern = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

const imageSchema = z
  .object({
    alt: z.string(),
    src: z.string(),
  })
  .strict();

const blogCollection = defineCollection({
  schema: z
    .object({
      author: z.enum(['Kevin Dam']),
      authorProfileImage: imageSchema.optional(),
      posted: z.string().regex(isoDatePattern),
      preview: z.string(),
      title: z.string(),
      tags: z.array(
        z
          .object({
            text: z.enum(KNOWN_TAGS),
            href: z
              .string()
              .refine(isURL, { message: "Tag's href must be a valid URL" })
              .optional(),
          })
          .strict()
      ),
      thumbnailImage: imageSchema.optional(),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
