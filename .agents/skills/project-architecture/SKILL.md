---
name: project-architecture
description: Enforces the project's directory architecture and file placement rules. Use this skill whenever generating new files, components, pages, or assets to ensure they are placed in the correct directories according to the project standard.
---

# Project Architecture Skill

When working on this project, you must strictly respect the established directory architecture. Do not create new root folders for source code; everything belongs in `src/` following these exact routing rules:

## Directory Architecture Rules

1. **`src/pages/` (Main Pages)**:
   - Only for routable Astro page components (e.g., `index.astro`, `about.astro`).
   - Keep logic here minimal; delegate the UI construction to components and sections.

2. **`src/page/` (Page Sections)**:
   - Use this directory for large, page-specific structural blocks (e.g., `banner.astro`, `cursos.astro`, `nosotros.astro`, `preguntas.astro`).

3. **`src/components/` (Reusable UI)**:
   - Place reusable UI elements here.
   - Respect the existing sub-folders:
     - `/bubble/`: For bubble-related components.
     - `/card/`: For cards (`card-icon.astro`, `stack-icon.astro`).
     - `/iconify/`: For icon components and definitions.
   - If a new generic component doesn't fit these categories, place it in the root of `src/components/`.

4. **`src/layouts/` (Wrappers)**:
   - Use exclusively for layout components (`navbar.astro`, `footer.astro`, `layout.astro`).

5. **`src/assets/` (Static Assets)**:
   - All static images and SVGs used directly inside components must go here, NOT in the root `/public/` folder.
   - Import them using Astro's asset optimization (e.g., `import icon from '@/assets/icon.svg'`).

6. **`src/styles/` (Global Styles)**:
   - Maintain global CSS rules, resets, and variables in `src/styles/global.css`.

## Development Constraints

- **File Extensions**: Use `.astro` files by default for all views and components.
- **Package Manager**: Use `pnpm` for all dependency installations.
- **Styling**: Component-specific styles should use scoped CSS inside `.astro` files. Use `global.css` only for true global rules.
