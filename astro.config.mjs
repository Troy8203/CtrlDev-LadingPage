// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: !isDev ? "https://troy8203.github.io/CtrlDev-LadingPage/" : undefined,
  base: !isDev ? "/CtrlDev-LadingPage/" : undefined,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), mdx()],
});