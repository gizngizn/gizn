import { defineCollection, z } from 'astro:content';

// Stream: chronological feed posts
const stream = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    link: z.string().url().optional(),
  }),
});

// Essays: timeless, curated pieces
const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { stream, essays };
