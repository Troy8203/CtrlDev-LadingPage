---
name: course-creator
description: Generates new courses and workshops using MDX files in the Astro project. Use this skill when creating single-session courses, multi-session workshops, and configuring the required frontmatter properties matching the project's Astro layout schemas.
---

# Course Creator Skill

When creating new courses or workshops for this Astro project, you must strictly follow the `src/pages/cursos` structure and the defined MDX frontmatter schemas.

## Directory Structure Rules

All courses live inside `src/pages/cursos/`. The routing depends on the length of the course:

1. **Single-Session Courses**:
   - Create a standalone `.mdx` file directly in `src/pages/cursos/` (e.g., `src/pages/cursos/web-basico.mdx`).

2. **Multi-Session Courses (Workshops)**:
   - Create a folder with the course name (e.g., `src/pages/cursos/taller-git/`).
   - Create a `.mdx` file for each session inside that folder (e.g., `sesion-1.mdx`, `sesion-2.mdx`).
   - Create a main `.mdx` file for the workshop overview at the root of `src/pages/cursos/` (e.g., `src/pages/cursos/taller-git.mdx`).

## Frontmatter Schema Requirements

Every `.mdx` file must include a YAML frontmatter block. The required fields are derived from the Astro layout typings.

### Schema Fields

- `layout` (String, required): Path to the dynamic slug layout.
  - For single sessions (or root workshop files): `./[slug].astro`
  - For nested sessions (inside a folder): `../[slug].astro`
- `title` (String, required): The title of the course/session.
- `author` (String, required): The name of the instructor.
- `date` (String, required): Date in the format "DD MMM YYYY".
- `content` (Array, optional): Used for indexing. Each item needs `name` (String) and `link` (String).
- `colaboration` (Array, optional): Information about collaborators.
  - `name` (String)
  - `link` (String, URL)
  - `imageUri` (String, URL)
  - `color` (String, Hex code)

### Example 1: Single Session Frontmatter (`src/pages/cursos/web-basico.mdx`)

```yaml
---
layout: ./[slug].astro
title: "Taller básico de desarrollo web: HTML, CSS y JavaScript"
author: "Matthew Phillips"
date: "09 Aug 2022"
---
# Content goes here...
```

### Example 2: Nested Multi-Session Frontmatter (`src/pages/cursos/taller-git/sesion-1.mdx`)

```yaml
---
layout: ../[slug].astro
title: "Introducción a Git - Sesión 1"
author: "Neil Graneros"
date: "09 Sep 2025"
colaboration:
  - name: "Nucleo GNU/Linux"
    link: "[https://www.nucleognulinux.org/](https://www.nucleognulinux.org/)"
    imageUri: "[https://i.postimg.cc/kM8Jgm4v/logo-nucleo.png](https://i.postimg.cc/kM8Jgm4v/logo-nucleo.png)"
    color: "#e7e8e9"
---
# Content goes here...
```

## Content Guidelines

- **Markdown Elements**: Use standard Markdown for headings (`#`, `##`), lists (`-`), and bold text (`**`).
- **Iframes**: When embedding slides (like Google Drive presentations), use standard HTML `<iframe>` tags within the `.mdx` file. Ensure `width`, `height`, and `allow` properties are set.
- **Components**: Because these are MDX files, Astro components can be imported and used directly in the content area if necessary.
- **Footers**: For course authors and general footers, use standard markdown blockquotes (`>`) and code blocks for locations (e.g., `🇧🇴 La Paz - Bolivia 2025`).
