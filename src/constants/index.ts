import type { Curso } from "@schema/models/curso";

export const coursesAvailable: Curso[] = [
  {
    title: "Curso Git",
    description: "Aprende los fundamentos de Git.",
    imageUri: "https://cdn.filestackcontent.com/6yJPbkQ4SnybLJPKPLXP",
    link: "taller-git",
  },
  {
    title: "Taller de Docker",
    description: "Docker la herramienta de desarrollo que necesitas.",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2N2kcwGuuKrO1dWeoUnD51V55LENezVnBQ&s",
    link: "taller-docker",
  },
  {
    title: "Curso Web Basic",
    description: "Aprende los fundamentos de HTML, CSS y JavaScript.",
    imageUri: "https://wallpapercave.com/wp/wp11723487.jpg",
    link: "web-basico",
  },
  {
    title: "Principios de Diseño UI/UX",
    description: "Aprende el manejo y funcionamento de Figma.",
    imageUri: "https://i.postimg.cc/Ls2kwnLY/image.png",
    link: "principios-ui-ux",
  },
];
