import eber from "@assets/devgames/eber-uzumaki-lopez.webp";
import ricardo from "@assets/devgames/ricardo-poma.webp";
import ricardoAlternate from "@assets/devgames/ricardo-poma-alternativa.webp";
import moises from "@assets/devgames/moises-silva.webp";
import paulo from "@assets/devgames/paulo-tintaya.webp";

export const speakers = {
  "eber-uzumaki-lopez": {
    name: "Eber Uzumaki Lopez",
    role: "Software Developer, Builder y Product & AI en Hugs Company",
    topic: "Inteligencia artificial y programación",
    title:
      "Game Over: te quedaste sin tokens. ¿Programar en tiempos de IA es un Pay-to-Win?",
    description:
      "¿Se está convirtiendo el desarrollo de software en un Pay-to-Win? Eber explora cómo la IA ha cambiado nuestra forma de programar, qué diferencias hay entre las herramientas gratuitas y de pago y cómo el acceso a esos recursos influye en nuestro trabajo.",
    bio: "Desarrollador de software con experiencia en desarrollo web y formación en Informática en la UMSA. Experimenta con herramientas, agentes y metodologías de desarrollo asistido por IA. Comparte lo que aprende con la comunidad tecnológica y ha dado charlas sobre IA, agentes y WebMCP.",
    website: "https://doneber.dev/",
    photos: [eber],
  },
  "ricardo-poma": {
    name: "Ricardo Poma",
    role: "Product Designer en BancoSol",
    topic: "Diseño UX",
    title:
      "El día que descubrí que mi usuario era un agente… y le fui infiel a Figma",
    description:
      "Una demo en vivo de cómo Claude convierte un diseño de Figma en un producto funcional usando MCP. Ricardo mostrará cómo preparar el archivo para que un agente lo interprete, qué pedirle y cómo revisar el resultado.",
    bio: "Diseña experiencias de incorporación y flujos de conversión para productos digitales de ahorro e inversión en BancoSol. Combina diseño UX orientado a objetos, Lean UX y optimización de conversión para validar decisiones antes de desarrollar.",
    photos: [ricardo, ricardoAlternate],
  },
  "moises-silva": {
    name: "Moisés Silva",
    role: "Ingeniero analista full stack",
    topic: "Inteligencia artificial y empleabilidad",
    title:
      "Empleabilidad. La IA ya escribe el código, ¿por qué las empresas siguen buscando desarrolladores?",
    description:
      "Con datos de Bolivia, Latinoamérica y el mundo, Moisés examinará cómo la IA cambia los filtros de contratación y qué pasa con los sistemas heredados. La charla aborda habilidades que pueden fortalecer perfiles junior e intermedios, como arquitectura, lógica de negocio, pruebas e ingeniería de producto.",
    bio: "Tiene experiencia en desarrollo, mantenimiento e implementación de sistemas administrativos, financieros, comerciales, logísticos y viales.",
    photos: [moises],
  },
  "paulo-tintaya": {
    name: "Paulo Tintaya",
    role: "PS Engineer y desarrollador de software en CodeRoad",
    topic: "Carrera profesional y comunidad",
    title: "Crecer colaborando en tiempos de IAs",
    description:
      "Cómo empezar a contribuir a proyectos de código abierto, recibir retroalimentación de otros desarrolladores y usar la IA como herramienta de aprendizaje para ganar experiencia profesional.",
    bio: "Especializado en backend con Python y Django, trabaja en proyectos del sector automotriz. Ha sido instructor de programación, participó en Djangonaut Space y colabora como mentor y ponente en comunidades tecnológicas.",
    photos: [paulo],
  },
};

export type SpeakerId = keyof typeof speakers;
