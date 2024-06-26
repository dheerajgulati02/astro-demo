import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [preact(), db()]
});