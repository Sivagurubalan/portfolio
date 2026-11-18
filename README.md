# Sivagurubalan — Portfolio

A dark, minimal personal portfolio built with Astro, React islands and Tailwind CSS.
It is based on the **DarkMinimal** template by Andres Hernandez / ThemeWagon (MIT).

## Run it

```bash
cd portfolio
npx pnpm@11.2.2 install   # first time only
npx pnpm@11.2.2 dev       # http://localhost:4321
```

If you already have pnpm installed globally (`npm i -g pnpm`), plain
`pnpm install` / `pnpm dev` works too. Node.js 20+ is required.

Build and preview the production output:

```bash
npx pnpm@11.2.2 build
npx pnpm@11.2.2 preview
```

## Where to edit things

**All personal content lives in [`src/data/site.ts`](src/data/site.ts).**
Name, role, intro line, email, location, skills, tech stack, projects and the
"currently building" card are all read from that file.

Links are already wired up: GitHub, LinkedIn, every project's repository and the
live ScamShield AI demo. The only optional piece left is `formspreeEndpoint` —
while it is empty, the contact form opens the visitor's mail app with the message
pre-filled, so it works without a backend.

### Other places you may want to touch

| File | What it controls |
| --- | --- |
| `src/components/home.astro` | Hero layout, social icons, WebGL letter-glitch canvas |
| `src/React/SkillsList.tsx` | The "What I do?" accordion + its icons |
| `src/components/projects.astro` | Project card markup |
| `src/components/contact.astro` | Contact copy and form |
| `src/components/footer.astro` | Footer stack, "currently building" card, copyright |
| `src/layouts/Layout.astro` | `<head>` metadata, colours (`--sec` is the purple accent) |
| `public/projects/*.svg` | Project cover images (1200×700) |
| `src/assets/og.svg`, `public/og.png` | Social share image |

Project covers are plain SVG, so you can restyle them in a text editor or drop in
PNG/WebP screenshots and update the `image` path in `src/data/site.ts`.

## Contact form (optional Formspree)

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint,
   e.g. `https://formspree.io/f/abcdwxyz`.
2. Put it in `formspreeEndpoint` in `src/data/site.ts`.

Without it the form falls back to `mailto:` — no account needed.

## Deploy

The site is fully static (`astro build` → `dist/`), so Vercel, Netlify, Cloudflare
Pages or GitHub Pages all work with zero configuration.

- **Vercel / Netlify:** set the project root to `portfolio`, build command
  `pnpm build`, output directory `dist`.
- **GitHub Pages under a subpath:** set `site` and `base` in
  `astro.config.mjs` (asset URLs already respect `BASE_URL`).

## Credits

- Design and original code: [Andres Hernandez](https://github.com/Gothsec) —
  [DarkMinimal](https://themewagon.com/themes/dark-minimal/), MIT licensed.
- Letter glitch effect inspired by [ReactBits](https://www.reactbits.dev).
- The MIT license requires keeping the attribution in the footer; it is there.
