// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), mdx(), sitemap({
    filter: (page) => !page.includes('/404')
  })
  ],
});
