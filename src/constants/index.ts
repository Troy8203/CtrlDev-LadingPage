import type { Curso } from "@schema/models/curso";

export const coursesAvailable: Curso[] = [
  {
    title: "Curso Git",
    description: "Aprende los fundamentos de Git.",
    imageUri: "https://matteus.dev/wp-content/uploads/git.webp",
    link: "/taller-git",
  },
  {
    title: "Taller de Docker",
    description: "Docker la herramienta de desarrollo que necesitas.",
    imageUri:
      "https://news.sophos.com/wp-content/uploads/2020/05/Docker-Logo-White-RGB_Vertical-BG_0.png?w=1200",
    link: "/taller-docker",
  },
  {
    title: "Curso Web Basic",
    description: "Aprende los fundamentos de HTML, CSS y JavaScript.",
    imageUri:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/272582230/original/db660ff88bdedbfeb008a322c8bdba52f6beb44a/code-custom-html-css-javascript-for-responsive-websites.png",
    link: "/web-basico",
  },
];
