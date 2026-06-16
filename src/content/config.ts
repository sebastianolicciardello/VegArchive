import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    youtube: z.string().url(),
    tags: z.array(z.string()),
    date: z.string(),
    transcript: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    totalTime: z.string().optional(),
    servings: z.string().optional(),
  }),
});

export const collections = { recipes };
