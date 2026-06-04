# Mercy Trading Solutions — Website

Modern, bilingual (English 🇬🇧 / French 🇫🇷) marketing website for **Mercy Trading
Solutions**, a West African physical-commodities company specialised in the
**buying, selling and export of raw cashew nuts (RCN)** from Côte d'Ivoire and
Guinea, with bonded warehouses in Vietnam and India.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**, and
exported as a fully static site that can be hosted anywhere.

---

## ✨ Features

- **Six pages:** Home, About, Services, Products, Network, Contact
- **One-click EN / FR language switch** (remembers the visitor's choice, and
  respects their browser language on first visit)
- Sleek, responsive design with a cashew-inspired green & gold theme
- Scroll reveal animations, sticky navigation, mobile menu
- Contact form that opens a pre-filled email to the company
- SEO-ready: per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- No backend required — deploys as static files

---

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
npm run build    # build the static site into ./out
```

Requirements: **Node.js 18.18+** (Node 20+ recommended).

---

## 🌍 Deploying

`npm run build` produces a static site in the **`out/`** folder. Host it on any
static platform:

- **Vercel** — import the repo; it auto-detects Next.js. Zero config.
- **Netlify / Cloudflare Pages** — build command `npm run build`, publish dir `out`.
- **GitHub Pages** — push the contents of `out/` to a `gh-pages` branch.

---

## ✏️ Editing content

Almost everything is in two small files — no need to touch the page layouts.

| What you want to change            | File                                              |
| ---------------------------------- | ------------------------------------------------- |
| **All text** (English + French)    | [`lib/translations.ts`](lib/translations.ts)      |
| Email, phone, director, nav links  | [`lib/site.ts`](lib/site.ts)                       |
| **Photos**                         | [`lib/assets.ts`](lib/assets.ts) + `public/images/` |
| Colors & fonts                     | [`tailwind.config.ts`](tailwind.config.ts)         |

### Text

`lib/translations.ts` holds an `en` object and a `fr` object with **exactly the
same shape**. Edit the value, keep the key. TypeScript will warn you if the two
languages ever drift apart.

### Photos

The real Mercy Trading photos are installed in `public/images/` (optimised JPEGs)
and referenced from `lib/assets.ts`. To replace any of them later, drop a new file
into `public/images/` and update the matching path in `lib/assets.ts`. See
[`public/images/README.md`](public/images/README.md) for the full guide.

### Contact details

Update `SITE` in `lib/site.ts`:

```ts
export const SITE = {
  email: "mohamed.diaby@mercytrading.com",
  phone: "+225 07 88 63 63 59",
  phoneHref: "+2250788636359", // same number, digits only, for click-to-call
  director: "Mohamed Lamine Diaby",
  ...
};
```

---

## 🗂 Project structure

```
app/                 # Next.js routes (one folder per page) + layout, metadata
  layout.tsx         # fonts, header/footer shell, global SEO
  page.tsx           # Home
  about|services|products|network|contact/page.tsx
  sitemap.ts, robots.ts, icon.svg
components/           # UI building blocks
  header.tsx, footer.tsx, language-provider.tsx
  page-hero.tsx, cta-band.tsx, contact-form.tsx, ui.tsx, icons.tsx, logo.tsx
  pages/             # the body of each page
lib/
  translations.ts    # ← all copy, EN + FR
  site.ts            # ← contact info & navigation
  assets.ts          # ← image paths
public/images/        # photos + placeholders
```

---

© Mercy Trading Solutions. Director: Mohamed Lamine Diaby · Based in Côte d'Ivoire 🇨🇮
