# Alexandru Gheorghiță — Portfolio

**Live: [alexandru-gheorghita.vercel.app](https://alexandru-gheorghita.vercel.app)**

Personal portfolio — full-stack + LLM developer. Dark, editorial design with serif accents, scroll-reveal animations, and an embedded product demo for [MesterLink](https://www.mesterlink.md), the production marketplace I built end-to-end.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS 4** (CSS-first config via `@theme`)
- Zero UI libraries — hand-rolled components, `IntersectionObserver` scroll reveals with reduced-motion and no-IO fallbacks
- Deployed on **Vercel**, auto-deploys from `main`

## Structure

All content lives in [`src/data.ts`](src/data.ts) — profile, projects, experience, and stack are plain typed objects; the components in [`src/App.tsx`](src/App.tsx) just render them. To update the site, edit `data.ts` and push.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build && npm run preview
```
