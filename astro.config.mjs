// @ts-check
//TODO: Review all this file
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
      // Esto desactiva la validación estricta de Vite
      strictPort: false,
    },
    preview: {
      host: '0.0.0.0',
      port: 4321,
      // Aquí está el truco: usamos un array con todos los posibles hosts
      allowedHosts: [
        'ctrl4dev.online',
        '.ctrl4dev.online', // El punto permite subdominios
        'localhost',
        '0.0.0.0'
      ]
    }
  },
  integrations: [icon(), mdx(), sitemap({
    filter: (page) => !page.includes('/404')
  })],
});