/**
 * Static Site Builder for Oye Chilli (oyechilli.com)
 * Compiles all pages, sitemap, robots.txt, headers, and assets for Cloudflare Pages.
 * Zero external dependencies.
 */

import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "./site.config.js";

// Import page renderers
import { renderHomePage } from "./src/pages/index.js";
import { renderContactPage } from "./src/pages/contact.js";
import { renderPrivacyPage } from "./src/pages/privacy.js";
import { renderTermsPage } from "./src/pages/terms.js";
import { renderRefundsPage } from "./src/pages/refunds.js";
import { render404Page } from "./src/pages/404.js";

const DIST_DIR = path.resolve("dist");
const SRC_ASSETS_DIR = path.resolve("src/assets");
const DIST_ASSETS_DIR = path.resolve("dist/assets");

// Recursive copy helper
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Build runner
async function build() {
  console.log("Building Oye Chilli website for production...");
  const startTime = Date.now();

  // 1. Clean or recreate dist directory
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 2. Define pages and target paths
  const pages = [
    { name: "Homepage", path: "index.html", render: renderHomePage },
    { name: "Contact", path: "contact/index.html", render: renderContactPage },
    { name: "Privacy Policy", path: "privacy/index.html", render: renderPrivacyPage },
    { name: "Terms of Use", path: "terms/index.html", render: renderTermsPage },
    { name: "Refunds Policy", path: "refunds/index.html", render: renderRefundsPage },
    { name: "404 Page", path: "404.html", render: render404Page }
  ];

  for (const page of pages) {
    const targetFile = path.join(DIST_DIR, page.path);
    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    const htmlContent = page.render();
    fs.writeFileSync(targetFile, htmlContent, "utf-8");
    console.log(`  ✓ Generated: ${page.path} (${page.name})`);
  }

  // 3. Generate sitemap.xml
  const sitemapUrls = [
    { loc: `${siteConfig.brand.url}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${siteConfig.brand.url}/contact`, priority: "0.8", changefreq: "monthly" },
    { loc: `${siteConfig.brand.url}/privacy`, priority: "0.5", changefreq: "monthly" },
    { loc: `${siteConfig.brand.url}/terms`, priority: "0.5", changefreq: "monthly" },
    { loc: `${siteConfig.brand.url}/refunds`, priority: "0.5", changefreq: "monthly" }
  ];

  const today = new Date().toISOString().split("T")[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemapXml.trim(), "utf-8");
  console.log("  ✓ Generated: sitemap.xml");

  // 4. Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteConfig.brand.url}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, "robots.txt"), robotsTxt, "utf-8");
  console.log("  ✓ Generated: robots.txt");

  // 5. Generate Cloudflare Pages _headers
  const headersTxt = `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: interest-cohort=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate
`;
  fs.writeFileSync(path.join(DIST_DIR, "_headers"), headersTxt, "utf-8");
  console.log("  ✓ Generated: _headers (Cloudflare security & caching rules)");

  // 6. Copy assets
  if (fs.existsSync(SRC_ASSETS_DIR)) {
    copyDirSync(SRC_ASSETS_DIR, DIST_ASSETS_DIR);
    console.log("  ✓ Assets copied to dist/assets");

    // Copy webmanifest to root of dist as well
    const webmanifestPath = path.join(SRC_ASSETS_DIR, "site.webmanifest");
    if (fs.existsSync(webmanifestPath)) {
      fs.copyFileSync(webmanifestPath, path.join(DIST_DIR, "site.webmanifest"));
      console.log("  ✓ Copied site.webmanifest to dist root");
    }
  }

  const duration = Date.now() - startTime;
  console.log(`\nBuild complete in ${duration}ms! Output is ready in ./dist\n`);
}

build().catch(err => {
  console.error("Build failed:", err);
  process.exit(1);
});
