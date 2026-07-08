# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (localhost:3000)
- `npm run build` — static export build; output goes to `out/` (see `next.config.ts`)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test suite in this repo.

## Architecture

This is a single-page portfolio site (Next.js App Router, static export). `src/app/page.tsx` renders one long page by stacking section components from `src/components/` in order (Hero, About, Services, Skills, Experience, Projects, Certifications, Interests, Contact), each wrapped in `<AnimateIn>` except Hero. Sections are independent, self-contained components — each owns its own hardcoded content array (see `projects.tsx`, `skills.tsx`, `experience.tsx`, `certifications.tsx`, `interests.tsx`) and its own `<section id="...">` anchor used for in-page nav (`navbar.tsx` links to these ids by hash). Most sections render their heading via the shared `<SectionHeading path="..." title="..." highlight="..." />` (`section-heading.tsx`) — the `path` renders as a `~/path` mono eyebrow; Contact is the one exception and hand-rolls a centered version of the same heading markup since `SectionHeading` assumes a left-aligned, full-width section.

There is no CMS or data layer: all resume/profile content (bio, work history, skills, project list, certifications) lives directly in the component files as literal arrays. Updating content means editing the relevant component.

**Static export + GitHub Pages deployment**: `next.config.ts` sets `output: "export"` and `basePath: "/portfolio"` in production (image optimization is disabled since there's no server). The site is built and deployed by `.github/workflows/nextjs.yml` on every push to `main`, uploading `out/` to GitHub Pages. Because of the conditional basePath, any component that references a static asset under `public/` (logos in `about.tsx`, `skills.tsx`; the CV PDF in `hero.tsx`, `navbar.tsx`, `contact.tsx`) must prefix the path with `process.env.NODE_ENV === "production" ? "/portfolio" : ""` rather than using a bare `/`-rooted path, or the asset 404s once deployed. Follow the existing `basePath` pattern in `about.tsx`/`skills.tsx` when adding new static asset references.

**Styling**: Tailwind CSS v4 via the CSS-based `@theme inline` config in `src/app/globals.css` (no `tailwind.config.js`) — colors (`background`, `foreground`, `accent`, `signal`, `ticker`, `muted`, `card`, `border`) and font stacks (`sans`, `display`, `mono`) are defined there as CSS variables and consumed as Tailwind utility classes (`text-accent`, `bg-card`, `font-display`, etc.). Three fonts are loaded with `next/font/google` in `src/app/layout.tsx`: Inter for body text, Space Grotesk for display headings (`font-display`, used by `SectionHeading` and `Hero`), JetBrains Mono for nav paths, eyebrows, and tags.

**Domain color-coding**: `src/lib/domains.ts` defines a 3-way "domain" system — `build` (amber/`accent`), `secure` (red/`signal`), `trade` (green/`ticker`) — that maps content to Zakaria's three areas of work (general dev, cybersecurity, algo-trading). It's introduced literally in the Hero status rows and echoed as hover accent bars / heading colors / bullet colors in `services.tsx`, `skills.tsx` (per skill-group), `projects.tsx` (per project), `certifications.tsx` (per cert), and `interests.tsx`. When adding a new project, skill group, service, cert, or interest, tag it with the `Domain` that actually matches its subject matter (most things are `build`; only tag `secure`/`trade` when the content is genuinely security- or trading-related) — don't construct Tailwind class names dynamically (e.g. `` `border-${x}` ``), since Tailwind's scanner needs the full class string to appear literally in the source; `domainStyle[domain].xxx` works because the complete class strings are already written out in `domains.ts`.

**Scroll-reveal animation**: `src/components/animate-in.tsx` is a client component using `IntersectionObserver` to fade/slide content in once it enters the viewport; it's a generic wrapper, not per-section logic. `globals.css` disables all transitions/animations under `prefers-reduced-motion: reduce`.
