# Repository Guidelines

## Project Structure

- `src/pages/` defines Astro routes, including the landing page, the 404 page, and course pages and lessons under `src/pages/cursos/`.
- `src/page/home/` contains the sections assembled by `src/pages/index.astro`. Put shared UI in `src/components/` and page shells in `src/layouts/`.
- Course listings live in `src/constants/index.ts`, with the `Curso` model in `src/types/models/curso.ts`. Global Tailwind CSS and daisyUI styles live in `src/styles/global.css`.
- Put imported images in `src/assets/` and files served directly, such as favicons, in `public/`.

## Build and Development Commands

Use Node.js 20 to match CI and install dependencies with pnpm.

- `pnpm install` installs dependencies using `pnpm-lock.yaml`.
- `pnpm dev` starts the Astro development server with live reload.
- `pnpm build` generates the production site in `dist/`.
- `pnpm preview` serves the built site locally after a build.

## Coding Style and Naming

Use two-space indentation and follow the project's strict TypeScript configuration. Use existing import aliases, such as `@components/` and `@layouts/`. Follow the lowercase kebab-case pattern for new components and course slugs, such as `card-img.astro` and `taller-git.mdx`. Keep public-facing copy in Spanish. Format changed files with `pnpm exec prettier --write <file>` using the configured Astro plugin.

## Testing and Verification

The repository has no automated test suite, coverage threshold, or lint script. Run `pnpm build` and preview the affected pages. For UI changes, check narrow and wide viewports and both themes. Verify changed navigation, course links, and assets from the domain root used by the Docker deployment.

## Commits and Pull Requests

Follow the recent Git history with a Conventional Commits prefix, an emoji, and a short imperative summary, such as `feat: ✨ add 404 page and black logo`. Describe the change and how you verified it in the PR. Link the relevant issue when available and include screenshots for visible changes. Target `feat/docker-file` for changes to the Docker deployment branch.
