// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const ramblingsCollection = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(), // Same as file name
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: ramblingsCollection,
};
