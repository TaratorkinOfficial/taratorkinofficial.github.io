# Taratorkin Official — studio site (v2 · blue riso)

Static site for [Taratorkin Official](https://taratorkinofficial.github.io), an independent
mobile games studio. Built with **Astro 5 + TypeScript (strict)**, deployed to **GitHub Pages**
via GitHub Actions.

## Stack & decisions

| Area | Choice | Why |
| --- | --- | --- |
| Framework | Astro 5, static output | Zero JS by default, build-time image optimization, first-class GitHub Pages support |
| Types | TS strict, typed data modules (`src/data/*.ts`) | Games/team/pitch/roadmap content is structured data — full compile-time safety, no CMS overhead |
| Images | `astro:assets` + sharp | Responsive `srcset`, dimensions inferred, no CLS |
| Fonts | Fontsource (self-hosted Unbounded, Manrope, Space Mono) | No Google CDN request, GDPR-friendlier, faster |
| Navigation | Astro View Transitions (`ClientRouter`) | SPA-feel page swaps with zero framework |
| Theme | Light default + dark toggle, `localStorage` + `prefers-color-scheme`, FOUC-safe inline boot script | |
| CI/CD | `.github/workflows/deploy.yml` — type-check → build → deploy | Every push to `main` type-checks and ships |
| SEO | Canonical, OG/Twitter, JSON-LD Organization, sitemap (`@astrojs/sitemap`), robots.txt | `/roadmap` is noindex + excluded everywhere |

## Pages

- `/` — studio home: hero, cover marquee, filterable portfolio, services, team, contact
- `/pitch` — publisher pitch with sticky agenda scrollspy; **print-friendly** (Ctrl+P → PDF)
- `/roadmap` — internal sprint methodology board, bilingual RU/EN, noindex, not linked from nav
- `/privacy` — privacy policy with sticky TOC
- `404` — custom not-found page

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # astro type-check
npm run build    # production build to dist/
npm run preview  # serve dist/ locally
```

## Deploy

Deployment targets the `taratorkinofficial.github.io` **user-site repo** (site served from `/`).

1. Push this project to the `TaratorkinOfficial/taratorkinofficial.github.io` repository
   (replacing the old static files), branch `main`.
2. In repo **Settings → Pages** set **Source: GitHub Actions** (one-time).
3. Every push to `main` builds and deploys automatically.

`public/app-ads.txt` (AdMob verification) and `public/icons/*` are copied to the site root
as-is — do not remove them.

## Notes

- The contact block intentionally uses `mailto:` + copy-to-clipboard instead of a form —
  GitHub Pages has no backend, and a fake form is worse than an honest email link. If a form
  is ever needed, wire it to Formspree/Web3Forms and POST from a plain `<form>`.
- `privacy` still contains `[TAX_ID_PLACEHOLDER]` — the owner's FOP tax ID must be filled in
  by the owner.
