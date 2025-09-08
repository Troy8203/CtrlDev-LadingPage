import type { Blog, Param } from "@schema/index";

export const cursosRoutes: Param<Blog>[] = [
  {
    params: { slug: "taller-git" },
  },
  {
    params: { slug: "taller-docker" },
  },
  {
    params: { slug: "web-basico" },
  },
];
