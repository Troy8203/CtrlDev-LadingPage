import type { ImageMetadata } from "astro";

export interface Miembro {
  nombre: string;
  rol: string;
  foto?: ImageMetadata;
  presentacion?: string;
  enlaces?: { etiqueta: string; url: string }[];
}
