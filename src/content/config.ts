import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(), // Automatically parses dates and datetime strings
    category: z.enum([
      'home',
      'breaking',
      'musrigharari',
      'samastipur',
      'bihar',
      'india',
      'world',
      'politics'
    ]),
    tags: z.string().optional().default(''),
    isBreakingNews: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { news };
