import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});

