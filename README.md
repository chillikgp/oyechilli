# Oye Chilli — Studio Website (`oyechilli.com`)

Official production-ready website for **Oye Chilli** (`oyechilli.com`), an independent Indian software and creative studio based in Mumbai, India.

---

## 🌶️ Studio Profile & Public Business Details

- **Public Brand:** Oye Chilli
- **Registered Enterprise Name:** OYE CHILLI
- **Entity Type:** Sole proprietorship
- **Public Contact Email:** [hello@oyechilli.com](mailto:hello@oyechilli.com)
- **Public Business Location:** Mumbai, Maharashtra, India
- **Udyam Registration Number:** `UDYAM-MH-18-0588472`
- **Official Domain:** [https://oyechilli.com](https://oyechilli.com)

> **Compliance & Privacy Guardrails:**
> - OYE CHILLI is an independent sole proprietorship registered under the MSME framework of the Government of India. It is not a private limited company, and Udyam registration is an enterprise registration, not corporate incorporation.
> - No personal phone numbers, residential street addresses, personal Gmail addresses, or registration document scans are published.
> - No D-U-N-S numbers or registered trademark claims are displayed.
> - The website contains no cookies, no tracking pixels, no advertising analytics, and no payment collection. Hence, no cookie consent banner is needed.

---

## 🚀 Product Showcase

| Product | Focus | Destination Links | Launch / Display Policy |
| :--- | :--- | :--- | :--- |
| **Natkhat** | Baby keepsakes & milestone photo creations | • [Visit website](https://www.natkhat.app/)<br>• [Get it on Google Play](https://play.google.com/store/apps/details?id=com.natkhat.app) | Factual description; dual verified external buttons |
| **huhu!** | Playful Hindi crossword & word puzzle game | • [Get it on Google Play](https://play.google.com/store/apps/details?id=com.huhu.puzzle) | Factual description; Play Store button |
| **Pickal** | Photographer client photo gallery tool | *Configurable in `site.config.js`* | External buttons omitted; not labeled "live" or "coming soon" until URL is confirmed |

---

## 🛠️ Architecture & Technology Stack

- **Zero-Dependency Static Site:** Built with native Node.js ES modules (`node:fs`, `node:path`), compiling in under 20ms with zero runtime dependencies.
- **Single Source of Truth:** All studio details, legal disclosures, navigation links, and product entries are centralized in [`site.config.js`](file:///Users/Divya/Documents/antigravity/happy-hubble/site.config.js).
- **Design System:** Bespoke modern CSS with CSS custom properties, warm off-white tones (`#FAF7F2`), chilli-red accents (`#D93829`), accessible typography, and subtle shadows.
- **Accessibility:** 
  - Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`).
  - High contrast text (> 7:1 ratio, WCAG AAA compliant).
  - Keyboard navigation with skip link (`.skip-link`) and `:focus-visible` outlines.
  - Respects user preference for reduced motion (`@media (prefers-reduced-motion: reduce)`).
- **Vector Artwork:** Bespoke inline SVGs for studio branding and product illustrations—no fabricated screenshots or corporate stock imagery.
- **SEO & Social Sharing:** Automatic Open Graph tags, Twitter card tags, Schema.org `Organization` and `WebSite` JSON-LD data, `sitemap.xml`, and `robots.txt`.
- **Cloudflare Pages Ready:** Includes `_headers` with strict Content-Security-Policy (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and asset caching.

---

## 📁 Repository Structure

```
.
├── site.config.js              # Central source of truth for all business and product details
├── build.js                    # High-speed static site generator (outputs to /dist)
├── serve.js                    # Zero-dependency local preview server
├── test.js                     # Automated verification test suite
├── package.json                # Project scripts
├── scripts/
│   └── generate_images.py      # Vector-to-raster generator for favicon and OG preview
├── src/
│   ├── assets/
│   │   ├── css/style.css       # Studio stylesheet & responsive design system
│   │   ├── icons/              # Favicon SVG/PNG and touch icons
│   │   ├── images/             # OpenGraph preview images
│   │   └── site.webmanifest    # Web manifest for mobile bookmarks
│   ├── components/
│   │   ├── header.js           # Header with accessible mobile navigation toggle
│   │   ├── footer.js           # Compliant studio footer with Udyam disclosure
│   │   ├── meta.js             # HTML head tags, canonical links & JSON-LD
│   │   ├── product-card.js     # Accessible product card renderer
│   │   └── icons.js            # Inline SVGs and bespoke vector product art
│   └── pages/
│       ├── index.js            # Homepage (Hero, Products, About, Contact CTA)
│       ├── contact.js          # Dedicated contact & business registration page
│       ├── privacy.js          # Scoped Privacy Policy for oyechilli.com
│       ├── terms.js            # Terms of Use for oyechilli.com
│       ├── refunds.js          # Cancellation & Refund Policy
│       └── 404.js              # 404 Not Found error page
└── dist/                       # Production output directory (ready for Cloudflare Pages)
    ├── index.html
    ├── contact/index.html
    ├── privacy/index.html
    ├── terms/index.html
    ├── refunds/index.html
    ├── 404.html
    ├── sitemap.xml
    ├── robots.txt
    ├── _headers
    └── assets/
```

---

## 💻 Local Development & Commands

```bash
# 1. Build the production website into /dist
npm run build

# 2. Run automated test suite
npm test

# 3. Start local preview server (serves /dist at http://localhost:3000)
npm start
```

---

## ☁️ Cloudflare Pages Deployment Instructions

### Method 1: Git Integration (Recommended)
1. Push this repository to your GitHub or GitLab account.
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select this repository and configure the build settings:
   - **Framework preset:** `None`
   - **Build command:** `node build.js` (or `npm run build`)
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
4. Click **Save and Deploy**. Cloudflare Pages will build and deploy the site in ~10 seconds.

### Method 2: Direct Upload (CLI via Wrangler)
```bash
# Install Wrangler if needed, then deploy dist directory directly:
npx wrangler pages deploy dist --project-name=oyechilli
```

---

## 🌐 Connecting `oyechilli.com` (Custom Domain & DNS)

1. In the Cloudflare Pages project dashboard, go to the **Custom Domains** tab.
2. Click **Set up a custom domain**.
3. Enter `oyechilli.com` and click **Continue**.
4. Repeat for `www.oyechilli.com` to ensure both apex and www routes resolve.
5. **DNS Records (Web Traffic Only):**
   - Cloudflare will automatically configure CNAME / ALIAS records pointing web traffic (`oyechilli.com` and `www.oyechilli.com`) to `<project-name>.pages.dev`.
   - ⚠️ **Critical DNS Note:** **Do not alter or delete existing MX, SPF (`TXT`), DKIM, or DMARC DNS records.** Those records handle your email routing for `hello@oyechilli.com`. Only web routing (A/AAAA/CNAME for root and www) is affected by Cloudflare Pages.

---

## 📋 Owner Confirmation Checklist (Before Going Live)

Before publishing, please review these final items:
- [ ] **Policy Review:** Review [`src/pages/privacy.js`](file:///Users/Divya/Documents/antigravity/happy-hubble/src/pages/privacy.js), [`src/pages/terms.js`](file:///Users/Divya/Documents/antigravity/happy-hubble/src/pages/terms.js), and [`src/pages/refunds.js`](file:///Users/Divya/Documents/antigravity/happy-hubble/src/pages/refunds.js). They are marked with a review callout noting they reflect launch operations and do not replace formal legal counsel.
- [ ] **Pickal URL:** When Pickal is ready for public preview or website launch, add its destination URL in [`site.config.js`](file:///Users/Divya/Documents/antigravity/happy-hubble/site.config.js) under `products[2].links`.
- [ ] **Email Routing:** Verify that an inbox or forwarder is active for `hello@oyechilli.com`.
- [ ] **Analytics/Future Features:** If you ever decide to add analytics or direct online checkout, update the Privacy Policy and Refund Policy accordingly before turning them on.
