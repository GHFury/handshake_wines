# Handshake Wines — Website Redesign

A pixel-perfect design mock for the Handshake Wines website revamp, built with Vite + React.
Inspired by the visual language of Shafer Vineyards, adapted to Handshake's brand and scope.

---

## Stack

- **Vite** — build tool & dev server
- **React 18** — UI framework
- **React Router v6** — client-side routing
- **CSS Modules** — scoped per-component styles
- **Google Fonts** — Cormorant Garamond + Raleway

---

## Project Structure

```
handshake-wines/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Router + AgeGate state
    ├── styles/
    │   └── theme.css         # Global tokens, resets, shared utilities
    ├── components/
    │   ├── AgeGate.jsx       # Age verification modal
    │   ├── AgeGate.module.css
    │   ├── Navbar.jsx        # Center-split nav, scroll-aware
    │   ├── Navbar.module.css
    │   └── Footer.jsx        # Shared footer w/ newsletter
    └── pages/
        ├── HomePage.jsx      # Hero + Who We Are + Our Story
        ├── HomePage.module.css
        ├── AboutPage.jsx     # Intro + Origin + Pillars + Process + CTA
        ├── AboutPage.module.css
        ├── ContactPage.jsx   # Info panel + Contact form + Stats band
        └── ContactPage.module.css
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## Design System

All design tokens live in `src/styles/theme.css` and are available globally as CSS custom properties:

| Token       | Value     | Usage                        |
|-------------|-----------|------------------------------|
| `--bg`      | `#0b0906` | Primary dark background      |
| `--bg2`     | `#100d09` | Section alternates           |
| `--cream`   | `#f0e6d3` | Body text                    |
| `--muted`   | `#8a7c6e` | Secondary / supporting text  |
| `--gold`    | `#c4a254` | Primary accent               |
| `--gold-lt` | `#d4b87a` | Hover state for gold         |
| `--white`   | `#faf6f0` | Headlines                    |

**Typography:**
- Headlines — `Cormorant Garamond` (serif, weight 300 with italic variants)
- Body / UI — `Raleway` (sans-serif, weight 300–600)

---

## Pages

| Route      | Component       | Description                              |
|------------|-----------------|------------------------------------------|
| `/`        | `HomePage`      | Full-screen hero, Who We Are, Our Story  |
| `/about`   | `AboutPage`     | Origin story, pillars, process, CTA      |
| `/contact` | `ContactPage`   | Contact form with validation, stats band |

---

## Replacing Placeholder Images

All images are currently sourced from Unsplash. To replace with real Handshake Wines assets:

1. Add images to `/public/images/`
2. Replace Unsplash URLs with `/images/your-file.jpg`

Recommended shots to source:
- **Hero** — Cinematic winery / cellar / vineyard landscape (16:9, at least 1920px wide)
- **Who We Are** — Wine being poured or handled (portrait crop)
- **Origin** — Barrel room, winery interior, or producer portrait
- **Story banner** — Aerial vineyard or moody cellar (used with parallax)
- **About Hero** — Vineyard exterior, golden hour preferred
- **Contact Hero** — Table setting, wine glasses, intimate scale

---

## Deployment

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The `/dist` folder is fully static and can be deployed to:
- **Netlify** (drag-and-drop or Git integration)
- **Vercel** (automatic via GitHub)
- **Any static host** (S3, Cloudflare Pages, etc.)

---

## Notes for Future Development

- **Squarespace / Webflow port**: Each component maps 1:1 to a section block. The `theme.css` tokens translate directly to Squarespace's Custom CSS panel.
- **Animation library**: Currently CSS-only. For richer scroll effects, swap the `IntersectionObserver` pattern for `framer-motion` or GSAP.
- **Form backend**: The contact form is UI-only. Connect to Formspree, Netlify Forms, or a custom endpoint by updating `handleSubmit` in `ContactPage.jsx`.
- **CMS integration**: Product/wine listings page can be added as `/wines` — recommend headless CMS (Contentful, Sanity) for producer-managed content.

---

*Design mock prepared for Handshake Wines, LLC. — hello@handshakewines.com*
