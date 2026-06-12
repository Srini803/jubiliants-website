# Jubiliants Software Solutions — Website

Modern corporate website for Jubiliants Software Solutions. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
jubiliants/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (fonts, meta, nav, footer)
│   │   ├── globals.css                   # Design system & global styles
│   │   ├── page.tsx                      # Home page
│   │   ├── sitemap.ts                    # Auto-generated sitemap
│   │   ├── software-solutions/
│   │   │   ├── digital-transformation/page.tsx
│   │   │   ├── custom-applications/page.tsx
│   │   │   └── mobile-applications/page.tsx
│   │   ├── artificial-intelligence/
│   │   │   ├── agentic-ai/page.tsx
│   │   │   ├── automation-with-ai/page.tsx
│   │   │   └── digital-transformation-with-ai/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   └── components/
│       ├── Navbar.tsx                    # Sticky nav with dropdown menus
│       ├── Footer.tsx
│       ├── PageHero.tsx                  # Reusable hero section
│       ├── RevealOnScroll.tsx            # Scroll-triggered animations
│       └── WhatsAppButton.tsx            # Floating WhatsApp button
├── public/
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option 2: Vercel Dashboard
1. Push this project to a GitHub/GitLab repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo — Vercel auto-detects Next.js
4. Deploy!

### Custom Domain
In Vercel dashboard → Settings → Domains → Add `jubiliants.com`

## ✏️ Customisations Before Going Live

1. **WhatsApp Number** — Update `+91XXXXXXXXXX` in `src/components/WhatsAppButton.tsx`
2. **Contact Form** — Connect to Formspree / EmailJS / your backend in `src/app/contact/page.tsx`
3. **Google Maps** — Replace the iframe embed URL with the actual Begumpet address embed from Google Maps
4. **Favicon** — Add `favicon.ico` and `apple-touch-icon.png` to `/public/`
5. **OG Image** — Add `opengraph-image.png` (1200×630) to `/public/` for social sharing
6. **Analytics** — Add Google Analytics or Plausible in `layout.tsx`

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary bg | `#050D1A` (navy-950) |
| Card bg | `#0A1628` (navy-900) |
| Accent blue | `#1E6FD9` |
| Accent cyan | `#00C2FF` |
| Display font | Syne (Google Fonts) |
| Body font | Inter (Google Fonts) |

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Syne + Inter)
- SEO: meta tags, Open Graph, sitemap, robots.txt
- Mobile responsive, keyboard accessible, reduced-motion respected
