# URV Cafe, Rewari: Website

A fast, SEO-optimised restaurant website for **URV Cafe** built with **Next.js (App Router) + TypeScript**. It works on mobile, tablet and desktop.

- 📞 +91 95188 76813
- ✉️ urvcafe@gmail.com

## Pages

| Route      | What's on it                                                                 |
|------------|-------------------------------------------------------------------------------|
| `/`        | Hero, menu categories with "from ₹" prices, offers, about, FAQ, contact + map |
| `/menu`    | Full menu (49 items, all prices) with Drinks / Food / Sweets filter and search |
| `/contact` | Call, WhatsApp, email, Google Map, and a message form that opens in WhatsApp or email |

There is also a sticky **Call / WhatsApp** bar on mobile (floating buttons on desktop).

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev          # open http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deploy (free) on Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com, choose **New Project**, and import the repo. Leave all settings at their defaults.
3. Under **Settings → Environment Variables**, add
   `NEXT_PUBLIC_SITE_URL = https://www.your-domain.com` (your real domain), then redeploy.
4. Connect your domain under **Settings → Domains**.

Netlify, Render and any Node host work too.

## Editing content

| What                                   | File            |
|----------------------------------------|-----------------|
| Menu items and prices, offers           | `data/menu.ts`  |
| Phone, email, address, map, SEO keywords | `lib/site.ts`   |
| Colours, fonts, layout                  | `app/globals.css` |
| Food photos and logo                    | `public/images/` |

To show a **"Must try"** tag on an item, add `popular: true` to it in `data/menu.ts`.

## SEO included

- A unique title, meta description and canonical URL on every page
- Open Graph and Twitter cards with a 1200×630 share image (`public/og-image.jpg`)
- **Schema.org JSON-LD**: `Restaurant` / `CafeOrCoffeeShop` with the full menu, every price in INR, offers and contact details. Google can use this to show your menu and prices in search results and Maps.
- **FAQPage** schema on the home page
- `sitemap.xml`, `robots.txt`, a web app manifest, favicon and Apple touch icon
- Local SEO: Rewari and Haryana geo tags and keywords
- Semantic HTML, alt text on every image, accessible navigation, and fast static pages with optimised images

### After going live (recommended)

1. Add your **full street address** in `lib/site.ts` (`address.street`) and set `mapQuery` to your exact Google Maps place name so the map pin is precise.
2. Verify the site in **Google Search Console**: paste the code into `verification` in `app/layout.tsx` and submit `https://your-domain/sitemap.xml`.
3. Create or claim your **Google Business Profile** for "URV Cafe Rewari" and add the website link. This matters most for "cafe near me" searches.
4. Optional: add opening hours to the JSON-LD in `components/JsonLd.tsx` (`openingHours: "Mo-Su 10:00-22:00"`).
