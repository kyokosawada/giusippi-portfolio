# Giusippi Apa — Portfolio

Personal portfolio for **Giusippi Apa**, a full-stack engineer.

> You want X. You get X. — full-stack web apps and automations, built, secured, and kept running.

## Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS v4**
- Deployed on **Netlify**
- Contact form via **Netlify Forms** (no backend)

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
```

## Build

```bash
bun run build
bun run start
```

## Structure

- `app/` — routes, layout, global styles
- `components/` — sections (Hero, Work, Experience, Process, Contact) + the stack diagram and screenshot carousel
- `lib/content.ts` — all site copy and project data in one place
- `public/shots/` — project screenshots

## Contact form

The form posts to Netlify Forms (`public/__forms.html` is the static form Netlify
detects at build). Submissions appear in the Netlify dashboard and are emailed to
the address configured under **Site config → Forms → notifications**.
