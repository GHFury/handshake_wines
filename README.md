# Handshake Wines — Website

Marketing site for Handshake Wines, a specialty wine distributor partnering with boutique,
family-owned Northern California wineries. Built with Vite + React.

## Stack

- **Vite** — build tool & dev server
- **React 18** + **React Router v6** — UI and client-side routing
- **Plain CSS** (`src/themes/vinifera/theme.css`) — design tokens and shared styles
- **Netlify** — hosting and form handling
- **Google Fonts** — Playfair Display + Lato

## Project structure

```
handshake-wines/
├── index.html                  # page metadata + hidden Netlify form definitions
├── public/
│   ├── _redirects              # SPA fallback so /about etc. work on refresh
│   ├── favicon.png, apple-touch-icon.png
│   ├── images/                 # logo.png, thomas.jpg, harvest-poster.jpg
│   └── videos/harvest.mp4      # homepage hero video
└── src/
    ├── main.jsx, App.jsx       # entry + routes + age gate
    ├── images.js               # stock image URLs (placeholders)
    ├── styles/theme.css        # global tokens used by the age gate
    ├── components/             # AgeGate, VideoHero
    └── themes/vinifera/        # Navbar, Footer, theme.css and the 5 pages
                                #   Home, About, Our Producers, Our Team, Contact
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Deploy (Netlify)

1. Push to GitHub.
2. Netlify → **Add new site → Import from Git** → pick this repo.
   Build command `npm run build`, publish directory `dist` (auto-detected).
3. After the first deploy, open **Forms** in the Netlify dashboard — `contact` and `newsletter`
   should be listed. Under **Form notifications**, add an email notification to the address that
   should receive leads.
4. Submit the contact form once on the live URL to confirm the email arrives.
   (Locally, `npm run dev` just shows the success message — nothing is sent.)

### Going live

- **Remove the `noindex` meta tag in `index.html`** (marked STAGING ONLY) or the site will stay hidden from Google.
- To use a custom domain/subdomain, add it under Netlify → Domain management and create the DNS
  record Netlify shows you.

## Forms

The contact form (`ContactPage.jsx`) and newsletter box (`Footer.jsx`) POST to Netlify Forms.
Netlify finds them via the hidden forms in `index.html` — **if you add or rename a field in the
React form, add or rename it in `index.html` too.**

## Content to update

- **Producers:** edit the `producers` array in `ProducersPage.jsx`.
- **Photos:** most images in `src/images.js` are stock placeholders hotlinked from Pexels.
  To replace one, drop the file in `public/images/` and point the entry at `/images/your-file.jpg`.
- **Hero video:** replace `public/videos/harvest.mp4` (keep it under ~10 MB) and the poster frame.
