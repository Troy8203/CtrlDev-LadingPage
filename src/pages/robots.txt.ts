import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseURL = site ?? new URL("http://localhost:4321/");
  const sitemapURL = new URL("sitemap-index.xml", baseURL);

  return new Response(
    `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`.trim(),
  );
};
