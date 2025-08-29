// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://troy8203.github.io/CtrlDev-LadingPage/",
  base: "/CtrlDev-LadingPage/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
