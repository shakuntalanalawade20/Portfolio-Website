# Shakuntala Nalawade — Portfolio Website

A modern, responsive portfolio website built with **React 18 + Vite**, showcasing projects, skills, and contact information for Shakuntala Nalawade — IT Engineering student and frontend developer based in Pune.

---

## Live Demo

> Deploy to Vercel/Netlify (see Deployment section below) and update this link.

---

## Features

- **Single-Page Application** with smooth scroll navigation
- **Lazy-loaded sections** using React `lazy` + `Suspense` for faster initial load
- **Responsive design** — works seamlessly on mobile, tablet, and desktop
- **Production-optimized build** via Vite (minified JS/CSS, cache-busted filenames)
- **Manual chunk splitting** — vendor (React) bundle separated for better caching
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Contact form** with validation and submit feedback

### Sections

| Section | Description |
|---|---|
| Hero | Name, tagline, CTA buttons, key stats |
| About | Bio, location, contact details |
| Skills | Categorized technology tags |
| Projects | Hospital Web App, IoT Smart Trolley |
| Experience & Education | Internship timeline, degree cards |
| Certifications | HackerRank badge, competition awards |
| Contact | Links + functional contact form |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS3 Custom Properties | Design tokens / theming |
| Google Fonts | Typography (Playfair Display + DM Sans) |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shakuntalanalawade20/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → Opens at http://localhost:3000
```

---

## Production Build

```bash
# Generate optimized production build
npm run build

# Output goes to: dist/

# Preview the production build locally
npm run preview
# → Opens at http://localhost:4173
```

### What the build optimizes:
- **Terser minification** — removes whitespace, shortens variable names
- **Chunk splitting** — React/ReactDOM in a separate vendor chunk for long-term caching
- **Hashed filenames** — `main-a3b2c1d.js` style, so CDN/browser caches bust on new deployments
- **Tree-shaking** — dead code eliminated automatically by Vite/Rollup

---

## Deployment

### Option 1 — Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

**Custom domain:**
- Vercel Dashboard → Project → Settings → Domains
- Add `www.shakuntala.dev` (or your domain)
- Update DNS records as shown (Vercel provides a TXT + CNAME)
- SSL is automatic via Let's Encrypt

### Option 2 — Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site from Git**
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy Site**

Add a `netlify.toml` for SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3 — GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://shakuntalanalawade20.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css          ← All styles (design tokens + component CSS)
│   ├── App.jsx          ← Root component + lazy loading
│   └── main.jsx         ← React entry point
├── index.html           ← HTML shell with meta tags
├── vite.config.js       ← Build config + chunk splitting
├── package.json
└── README.md
```

---

## Performance Notes

| Technique | Implementation |
|---|---|
| Lazy loading | `React.lazy()` + `<Suspense>` per section |
| Code splitting | Vite `manualChunks` for vendor bundle |
| Font optimization | `rel="preconnect"` for Google Fonts |
| CSS minification | Vite production build (built-in) |
| JS minification | Terser (via Vite) |
| Image lazy loading | `loading="lazy"` on any `<img>` tags added |

---

## Cross-Browser Testing

Tested on:
- ✅ Chrome 124+
- ✅ Firefox 126+
- ✅ Safari 17+
- ✅ Edge 124+
- ✅ Mobile Chrome (Android)
- ✅ Mobile Safari (iOS)

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 768px | Single column, hamburger nav |
| 768px – 1100px | 2-column grids |
| > 1100px | Full layout, max-width 1100px |

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| Section load performance | Implemented `React.lazy` + `Suspense` with loading spinner |
| Font flash on load | Added `preconnect` hints and `font-display: swap` via Google Fonts URL |
| Mobile nav overlap | Fixed-height nav with `backdrop-filter: blur` + hamburger toggle |
| Contact form (no backend) | Client-side only with simulated submission + real link to email/LinkedIn |
| CSS specificity | All styles scoped to component class names in a single App.css |

---

## Customization

To update your information, edit these files:
- **Bio / personal info** → `src/components/About.jsx`
- **Skills** → `src/components/Skills.jsx` (edit the `skillData` array)
- **Projects** → `src/components/Projects.jsx` (edit the `projects` array)
- **Experience / Education** → `src/components/Experience.jsx`
- **Certifications** → `src/components/Certifications.jsx`
- **Colors / fonts** → `:root` variables in `src/App.css`

---

## Author

**Shakuntala Nalawade**
- 📧 shaku6979@gmail.com
- 📞 +91 7276812585
- 💼 [LinkedIn](https://www.linkedin.com/in/shakuntala-nalawade-21885824b)
- 🐙 [GitHub](https://github.com/shakuntalanalawade20)
- 📍 Wakad, Pune, Maharashtra

---

## License

This project is open source and available under the [MIT License](LICENSE).
