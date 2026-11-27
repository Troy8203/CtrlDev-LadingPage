import { speakers, type SpeakerId } from "./ponentes";

export const categories = {
  charla: "Charlas",
  juego: "Dinámicas de juego / app",
  logistica: "Logística / break",
};

type Category = keyof typeof categories;

export const conversatorio = {
  id: "conversatorio",
  start: "12:40",
  end: "13:20",
  title: "El tributo que desobedeció: ¿se salió de control la IA?",
  hosts: "Conversatorio con Roy Ayala y Alan Arnez",
  question:
    "Si tu asistente cumple el objetivo tomando una decisión que jamás habrías autorizado, ¿dirías que funcionó? ¿Dónde pondrías el límite?",
} as const;

type AgendaItem = [
  string,
  string,
  string,
  string,
  Category,
  (SpeakerId | typeof conversatorio.id)?,
];

function talk(start: string, end: string, speakerId: SpeakerId): AgendaItem {
  const { name, title } = speakers[speakerId];
  return [start, end, name, title, "charla", speakerId];
}

export const agenda: AgendaItem[] = [
  [
    "09:00",
    "09:20",
    "Bienvenida y acreditación a los participantes",
    "La Cosecha y asignación de Distritos",
    "logistica",
  ],
  talk("09:20", "10:00", "eber-uzumaki-lopez"),
  [
    "10:00",
    "10:15",
    "Trivia de supervivencia (Kahoot)",
    "Dinámica en vivo",
    "juego",
  ],
  [
    "10:15",
    "10:35",
    "Duelos en la aplicación para ganar puntos",
    "Enfrentamientos entre tributos",
    "juego",
  ],
  talk("10:35", "11:15", "ricardo-poma"),
  ["11:15", "11:30", "El desafío de la Cornucopia", "Reto especial", "juego"],
  talk("11:30", "12:10", "moises-silva"),
  ["12:10", "12:40", "Refrigerio", "Pausa de suministros", "logistica"],
  [
    conversatorio.start,
    conversatorio.end,
    conversatorio.title,
    conversatorio.hosts,
    "charla",
    conversatorio.id,
  ],
  [
    "13:20",
    "13:40",
    "Escaneo de QR por el campus",
    "Búsqueda de recursos secretos en la arena",
    "juego",
  ],
  [
    "13:40",
    "14:00",
    "Networking basado en puntos mediante la app",
    "Conexión entre distritos",
    "juego",
  ],
  talk("14:00", "14:40", "paulo-tintaya"),
  [
    "14:40",
    "15:00",
    "Fotografías y despedida",
    "Cierre de los juegos y premiación",
    "logistica",
  ],
];

export const districts = [
  "Ciberseguridad e Inteligencia Artificial",
  "Hardware y Redes",
  "Desarrollo Full Stack",
  "Bases de Datos y Cloud",
];

export const mechanics = [
  {
    icon: "mingcute:group-line",
    title: "La Cosecha",
    description:
      "En la acreditación, cada tributo es asignado al azar a uno de los cuatro Distritos Tecnológicos.",
  },
  {
    icon: "mingcute:game-2-line",
    title: "La App de la Arena",
    description:
      "Suma Créditos de Patrocinio en tiempo real, enfrenta duelos 1v1 entre avatares y sigue el Tablero de los Vigilantes, con el ranking individual y por distrito en vivo.",
  },
  {
    icon: "mingcute:flash-line",
    title: "Retos de Supervivencia",
    description:
      "Pon a prueba tu ingenio con trivias técnicas relámpago, El Desafío de la Cornucopia, códigos QR ocultos en el recinto («fallas del sistema») y networking gamificado.",
  },
  {
    icon: "mingcute:gift-line",
    title: "Tienda del Capitolio",
    description:
      "Canjea los créditos acumulados por suministros físicos, merchandising, stickers y comodines durante el evento.",
  },
];
