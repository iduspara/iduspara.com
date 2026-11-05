<img src="assets/icon.svg" width="64" height="64" alt="">

# iduspara.com

My personal website: portfolio, blog and CV, in English and German.

Built with **Next.js 16** (App Router, Cache Components), **React 19**, **Tailwind CSS 4** and **shadcn/ui** (Base UI). Every page is prerendered at build time and scores **100/100/100/100 in Lighthouse** on mobile and desktop.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000 → redirects to /en or /de
```

| Script           | What it does                                |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Start the dev server (Turbopack)            |
| `pnpm build`     | Production build, fails on invalid content |
| `pnpm start`     | Serve the production build                  |
| `pnpm lint`      | ESLint                                      |
| `pnpm typecheck` | Generate route types and run `tsc`          |
| `pnpm format`    | Prettier (with Tailwind class sorting)      |

Set `NEXT_PUBLIC_SITE_URL` if the site runs anywhere other than `https://iduspara.com` (used for canonical URLs, sitemap, RSS and Open Graph).

Analytics run on PostHog, initialized in `src/instrumentation-client.ts`. Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` in `.env.local` and in Vercel. Without a token, PostHog is not loaded.

## Project structure

```
content/
  blog/{en,de}/*.mdx        Blog posts
  portfolio/{en,de}/*.mdx   Case studies of my products
  pages/{en,de}/*.mdx       Imprint and privacy policy
public/images/              Avatar and project covers
src/
  app/[locale]/             Routes (root layout lives here; `locale` is a root param)
  app/                      sitemap, robots, manifest, icons, global 404
  components/
    ui/                     shadcn/ui primitives
    layout/                 Header, footer, navigation, theme & language switch
    sections/               Home page sections
    blog/ portfolio/        Content cards and headers
    mdx/                    Components available inside MDX
    shared/                 Container, Section, JSON-LD, icons, links
  config/site.ts            Name, URL, email, social links
  data/profile.ts           Experience timeline and skills
  hooks/                    Client hooks
  i18n/                     Locales, dictionaries, path helpers
  lib/                      Content loader, MDX, SEO, structured data, OG images
  messages/{en,de}.json     UI copy (first person)
  types/                    Shared TypeScript types
  utils/                    Pure helpers (dates, reading time, formatting)
  proxy.ts                  Redirects `/` to the visitor's preferred language
```

## Writing content

All copy is written in the **first person**.

### A new blog post

Create the same file name in both languages, e.g. `content/blog/en/my-post.mdx` and `content/blog/de/my-post.mdx`:

```mdx
---
title: My post
description: One or two sentences, 50–160 characters.
date: 2026-11-04
draft: true # drafts show in `pnpm dev` only
---

Content in Markdown. Code blocks are highlighted at build time.
```

### A new portfolio project

Add `content/portfolio/{en,de}/<slug>.mdx` and a cover image (1440×900) to `public/images/projects/`:

```mdx
---
title: Project
tagline: Short one-liner.
description: Used for SEO, max. 200 characters.
role: Founder, design & development
since: "2026"
status: active # active | maintained | archived
stack: ["Next.js", "React"]
cover: /images/projects/project.jpg
coverAlt: What the screenshot shows.
url: https://example.com
links: [{ label: GitHub, href: https://github.com/… }]
featured: true
order: 6
---
```

Frontmatter is validated with Zod, so a mistake fails the build with a clear message.

### MDX components

- `<Callout title="…">…</Callout>`: highlighted note
- `<Figure src="…" alt="…" width={1440} height={900} caption="…" />`: optimised image

### CV data and UI text

- Experience timeline and skills: `src/data/profile.ts`
- Headlines, about text and all UI strings: `src/messages/en.json` and `de.json`

## Performance notes

- Pages are Server Components; the only client components are the theme toggle, the language links and the active-link state in the navigation. The mobile menu uses the native Popover API.
- `ensureStatic = "navigation"` in the root layout makes the build fail if anything becomes request-time dynamic.
- On phones, project cards use small thumbnails and the case-study cover sits below the text, so the LCP element is text (Lighthouse's simulated LCP is much cheaper for text than for images).
- Fonts are self-hosted via `next/font`; images are served as WebP via `next/image`.
