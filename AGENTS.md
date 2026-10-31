# Agent Instructions for Ctrl+Dev Landing Page

## Quick Start

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server (http://localhost:3000)
pnpm build         # Production build → dist/
pnpm preview       # Preview production build
```

## Architecture

**Astro 5 static site generator** with TypeScript, Tailwind CSS, and DaisyUI.

### Directory Structure (Strict Enforcement)

- **`src/pages/`** — Routable Astro pages only (e.g., `index.astro`, `404.astro`)
  - `cursos/` — Course/workshop MDX files (single-session: `.mdx` files; multi-session: folder + `[slug].astro` layout)
- **`src/page/`** — Page-specific section components (e.g., `banner.astro`, `cursos.astro`, `nosotros.astro`, `preguntas.astro`)
- **`src/components/`** — Reusable UI components
  - `bubble/` — Bubble components
  - `card/` — Card components (`card-icon.astro`, `stack-icon.astro`)
  - `iconify/` — Icon components and definitions
  - Root level for generic components that don't fit above categories
- **`src/layouts/`** — Layout wrappers only (`navbar.astro`, `footer.astro`, `layout.astro`)
- **`src/assets/`** — Static images and SVGs (imported with Astro asset optimization, NOT `/public/`)
- **`src/styles/`** — Global CSS rules only in `global.css`
- **`src/types/`**, **`src/constants/`**, **`src/utils/`**, **`src/routes/`** — As needed

See `.agents/skills/project-architecture/SKILL.md` for full enforcement rules.

## TypeScript Path Aliases (tsconfig.json)

```
@components/*  → src/components/*
@assets/*      → src/assets/*
@layouts/*     → src/layouts/*
@page/*        → src/page/*
@schema/*      → src/types/*
@utils/*       → src/utils/*
```

Use these aliases in all imports; do NOT use relative paths.

## Code Style

- **Astro files only** (`.astro`); no separate `.tsx`/`.jsx` files
- **Prettier plugin**: `prettier-plugin-astro` active; format with `pnpm exec prettier --write <file>`
- **Scoped CSS** inside `.astro` components (no global styles except `src/styles/global.css`)
- **Commit messages**: Follow conventional commits with emoji
  - Recent examples: `feat: ✨ add 404 page`, `style: 🎨 update blog column`, `refactor: 🔨 update courses page`

## Courses & Workshops (MDX)

All courses live in `src/pages/cursos/`. See `.agents/skills/course-creator/SKILL.md` for:

- Single-session vs. multi-session folder structure
- Required YAML frontmatter (`layout`, `title`, `author`, `date`, optional `content`, `colaboration`)
- Embedding Google Slides with `<iframe>`

## Build & Deploy

- **Dev server**: Astro watches `src/`, rebuilds on file change
- **Production build**: Output goes to `dist/` (gitignored)
- **GitHub Pages deployment**: Auto-triggered on `main` branch push (`.github/workflows/deploy.yml`)
  - Site URL: `https://troy8203.github.io/CtrlDev-LadingPage/` (configured in `astro.config.mjs`)
  - Base path: `/CtrlDev-LadingPage/`

## pnpm Workspace Config

`pnpm-workspace.yaml` enables builds for `@tailwindcss/oxide`, `esbuild`, `sharp`. Do not remove; required for Tailwind v4 and image optimization.

## No Testing, Linting, or Typechecking Scripts

This project has no `test`, `lint`, or `typecheck` npm scripts. TypeScript is strict (extends `astro/tsconfigs/strict`).

## Integration Features

- **Astro Icon** — Icon library via `@iconify-json/*` packages
- **MDX** — Write markdown/JSX in course files
- **Sitemap** — Auto-generated (excludes `/404` pages)
- **Tailwind v4** — Via `@tailwindcss/vite` plugin
