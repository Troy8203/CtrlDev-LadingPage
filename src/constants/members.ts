import type { Member } from "@schema/models/member";

// TODO: datos e imagenes de ejemplo. Reemplazar por los perfiles reales antes de publicar.
export const members: Member[] = [
  {
    name: "Ana Ejemplo",
    role: "Fundadora",
    phrase: "Si compila a la primera, desconfía.",
    photo: "https://i.pravatar.cc/300?img=47",
    socials: [
      { network: "github", url: "https://github.com/" },
      { network: "linkedin", url: "https://www.linkedin.com/" },
      { network: "web", url: "https://example.com/" },
    ],
  },
  {
    name: "Luis Ejemplo",
    role: "Organizador",
    phrase: "Primero que funcione, después que quede bonito.",
    photo: "https://i.pravatar.cc/300?img=12",
    socials: [
      { network: "github", url: "https://github.com/" },
      { network: "telegram", url: "https://telegram.org/" },
    ],
  },
  {
    name: "María Ejemplo",
    role: "Facilitadora de Git y Docker",
    phrase: "Un commit pequeño vale más que mil promesas.",
    socials: [
      { network: "github", url: "https://github.com/" },
      { network: "instagram", url: "https://www.instagram.com/" },
    ],
  },
  {
    name: "Carlos Ejemplo",
    role: "Diseño UI/UX",
    photo: "https://i.pravatar.cc/300?img=33",
    socials: [
      { network: "linkedin", url: "https://www.linkedin.com/" },
      { network: "instagram", url: "https://www.instagram.com/" },
      { network: "tiktok", url: "https://www.tiktok.com/" },
    ],
  },
  {
    name: "Sofía Ejemplo",
    role: "Redes y comunidad",
    phrase: "Nadie aprende solo, por eso estamos aquí.",
    photo: "https://i.pravatar.cc/300?img=45",
    socials: [
      { network: "facebook", url: "https://www.facebook.com/" },
      { network: "tiktok", url: "https://www.tiktok.com/" },
    ],
  },
  {
    name: "Diego Ejemplo",
    role: "Miembro",
    phrase: "Aprendiendo a programar un bug a la vez.",
    photo: "https://i.pravatar.cc/300?img=68",
  },
];
