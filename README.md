# JEEM LABS — thejeemlabs.com

The official JEEM LABS platform: an engineering-led technology company
website built as a long-term digital brand system.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) ·
Tailwind CSS 4 (CSS-first token system) · Zod · self-hosted Geist fonts.
No animation library, no CSS-in-JS runtime, no third-party scripts.

## Commands

```bash
npm run dev         # develop
npm run build       # production build
npm run start       # serve production build
npm run typecheck   # strict TS check
npm run lint        # eslint
```

## Architecture

```
src/
  app/                 routes (App Router) — see URL map below
  components/
    ui/                primitives: Button, Signal, Tag, Field, Logo, Reveal
    layout/            header, footer, theme
    patterns/          SectionHeader, ServiceIndex, ArchitectureDiagram,
                       Faq, ProcessSteps, WorkList, InsightList, CTASection…
    forms/             inquiry + contact (client islands)
  content/             THE content layer — typed modules, CMS-ready
  lib/                 seo, validations, rate-limit, analytics, utils
public/brand/          official logo asset (optimised copy)
scripts/               one-off asset tooling
```

### Design system

All visual decisions live in `src/app/globals.css` as semantic tokens
(`--surface`, `--text-primary`, `--accent-primary`, `--signal`, …) with
first-class light and dark themes. Components consume tokens only — never
raw hex values. Border-first: elevation is reserved for things that
actually float.

### Content integrity (read before editing `src/content/`)

Nothing on this site is fabricated. Case studies, metrics, testimonials
and team information appear **only when real**. See
`docs/CONTENT-GUIDE.md` and `src/content/work.example.ts`.

### Forms

`/start-project` and `/contact` POST to `/api/inquiry` and `/api/contact`.
Both validate with Zod server-side, are honeypot-protected and rate
limited. Delivery (email/CRM) is a single documented extension point in
<<<<<<< HEAD
each route — provider comparison and the key-injection process are
documented in `docs/EMAIL-DELIVERY.md`; env names live in `.env.example`.

### Performance

The site is treated as a performance artifact: findings, fixes and the
standing budget (LCP ≤ 2.5s, one preloaded font, JS-island allowlist)
are documented in `docs/PERFORMANCE.md`, including decisions that were
evaluated and deliberately rejected (PPR, homepage splitting).
=======
each route — see `.env.example`.
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19

### Environment

Copy `.env.example` → `.env.local`. `NEXT_PUBLIC_SITE_URL` drives
canonical URLs, sitemap and JSON-LD.

## URL map

`/`, `/services`, `/services/[6 services]`, `/work`, `/work/[slug]`,
`/products`, `/insights`, `/insights/[slug]`, `/about`, `/start-project`,
`/contact`, `/careers`, `/privacy`, `/terms`, `/sitemap`, plus
`sitemap.xml`, `robots.txt`, `manifest.webmanifest`.

Future-reserved by design: `/products/[slug]`, `/solutions/[audience]`,
`/research`. Do not launch these until there is genuinely distinct,
real content for them.
