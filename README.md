# Ctrl+Dev - Landing Page

![Astro](https://img.shields.io/badge/Astro-232323?style=for-the-badge&logo=astro&logoColor=FFFFFF)
![TypeScript](https://img.shields.io/badge/TypeScript-232323?style=for-the-badge&logo=typescript&logoColor=3178C6)
![PNPM](https://img.shields.io/badge/PNPM-232323?style=for-the-badge&logo=pnpm&logoColor=F69220)
![Tailwind-CSS](https://img.shields.io/badge/Tailwind_CSS-232323?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4)

A modern and responsive web application built with Astro and TypeScript. This project aims to provide a seamless user experience with a component-based architecture and efficient frontend workflow.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Component-Based UI**: Built with reusable Astro components for maintainable code.
- **Static Site Generation**: Uses Astro’s SSG for fast performance and SEO-friendly pages.
- **Type Safety**: Fully typed with TypeScript for fewer runtime errors.
- **Modern Build Tools**: Managed with pnpm for faster installs and smaller disk usage.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stream-cast-frontend.git
   cd stream-cast-frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server:

```bash
pnpm dev
```

This will typically run the app on `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
pnpm build
```

This will create a `dist` folder with the optimized production build.

### Preview Production Build

```bash
pnpm preview
```

This will serve the production build locally for testing.

## Project Structure

```bash
.
├── 📁 .astro/                # Astro collections and configuration
├── 📁 dist/                  # Production build output
├── 📁 public/                # Static assets (images, favicons)
├── 📁 src/
│   ├── 📁 assets/            # SVGs and images used in the project
│   ├── 📁 components/        # Reusable UI components
│   │   ├── 📁 bubble/        # Bubble component
│   │   ├── 📁 card/          # Card components (card-icon, stack-icon)
│   │   ├── 📁 iconify/       # Icon components and definitions
│   │   └── 📄 Welcome.astro  # Welcome component
│   ├── 📁 layouts/           # Layout components (navbar, footer, layout)
│   ├── 📁 page/              # Page sections (banner, cursos, nosotros, preguntas)
│   ├── 📁 pages/             # Main pages (index.astro)
│   └── 📁 styles/            # Global styles (global.css)
├── ⚙️ .vscode/               # VSCode configurations
├── 📄 astro.config.mjs       # Astro configuration
├── 📄 package.json           # Project dependencies and scripts
├── 📄 pnpm-lock.yaml         # pnpm lock file
└── 📄 README.md              # Project README
```

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
