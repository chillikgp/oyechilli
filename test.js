/**
 * Automated Verification Test Suite for Oye Chilli Website
 * Validates file structure, content accuracy, accessibility, legal disclosures, and negative constraints.
 */

import fs from "node:fs";
import path from "node:path";
import assert from "node:assert";

const DIST_DIR = path.resolve("dist");

function runTests() {
  console.log("Running comprehensive automated verification...\n");
  let passed = 0;
  let failed = 0;

  function test(name, fn) {
    try {
      fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ ${name}`);
      console.error(`    Error: ${err.message}`);
      failed++;
    }
  }

  // Test 1: Dist output exists
  test("Dist directory and required files exist", () => {
    assert(fs.existsSync(DIST_DIR), "dist directory does not exist");
    const requiredFiles = [
      "index.html",
      "contact/index.html",
      "privacy/index.html",
      "terms/index.html",
      "refunds/index.html",
      "404.html",
      "sitemap.xml",
      "robots.txt",
      "_headers",
      "site.webmanifest",
      "assets/css/style.css",
      "assets/icons/favicon.svg",
      "assets/icons/favicon.png",
      "assets/icons/apple-touch-icon.png",
      "assets/images/og-image.png"
    ];

    for (const file of requiredFiles) {
      const fullPath = path.join(DIST_DIR, file);
      assert(fs.existsSync(fullPath), `Missing required file: ${file}`);
    }
  });

  // Test 2: Homepage content checks
  test("Homepage contains required brand, copy, products, and links", () => {
    const html = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

    // Brand and Hero
    assert(html.includes("Oye Chilli"), "Missing brand wordmark");
    assert(html.includes("A little spice. A lot of possibility."), "Missing hero headline");
    assert(html.includes("We make playful apps and useful digital tools for everyday life."), "Missing hero supporting copy");
    assert(html.includes("Explore our products"), "Missing primary CTA");
    assert(html.includes("Say hello"), "Missing secondary CTA");
    assert(html.includes("mailto:hello@oyechilli.com"), "Missing email link in hero or header");

    // Products
    // Natkhat
    assert(html.includes("Natkhat"), "Missing Natkhat product card");
    assert(html.includes("Turn everyday baby photos into beautiful themed photos and milestone memories."), "Missing Natkhat exact description");
    assert(html.includes("https://www.natkhat.app/"), "Missing Natkhat website link");
    assert(html.includes("https://play.google.com/store/apps/details?id=com.natkhat.app"), "Missing Natkhat Play Store link");

    // huhu!
    assert(html.includes("huhu!"), "Missing huhu! product card");
    assert(html.includes("A playful Hindi crossword and word puzzle game."), "Missing huhu! exact description");
    assert(html.includes("https://play.google.com/store/apps/details?id=com.huhu.puzzle"), "Missing huhu! Play Store link");

    // Pickal
    assert(html.includes("Pickal"), "Missing Pickal product card");
    assert(html.includes("A client photo gallery tool that helps photographers share galleries and lets clients browse and select their favourite photos."), "Missing Pickal description");
    // Pickal must NOT have an external CTA button or claim "live" or "coming soon"
    assert(!html.includes('href="https://pickal'), "Pickal should not have an invented URL");
    assert(!html.includes("coming soon") && !html.includes("Coming soon") && !html.includes("Coming Soon"), "Pickal must not be labeled coming soon");
    assert(!html.includes('badge">Live<'), "Pickal must not be labeled Live");

    // Footer
    assert(html.includes("OYE CHILLI"), "Missing legal entity name OYE CHILLI");
    assert(html.includes("UDYAM-MH-18-0588472"), "Missing Udyam registration in footer");
    assert(html.includes("Sole proprietorship") || html.includes("sole proprietorship"), "Missing sole proprietorship disclosure");
    assert(html.includes("Mumbai, India") || html.includes("Mumbai, Maharashtra, India"), "Missing location in footer");
    assert(html.includes("2026"), "Missing current year copyright");
  });

  // Test 3: Supporting pages verification
  test("Supporting pages (/contact, /privacy, /terms, /refunds) exist and have accurate contents", () => {
    const contactHtml = fs.readFileSync(path.join(DIST_DIR, "contact/index.html"), "utf-8");
    assert(contactHtml.includes("hello@oyechilli.com"), "Contact page missing email");
    assert(contactHtml.includes("Mumbai, Maharashtra, India"), "Contact page missing full public location");
    assert(contactHtml.includes("UDYAM-MH-18-0588472"), "Contact page missing Udyam registration");

    const privacyHtml = fs.readFileSync(path.join(DIST_DIR, "privacy/index.html"), "utf-8");
    assert(privacyHtml.includes("oyechilli.com"), "Privacy page missing scope");
    assert(privacyHtml.includes("Cloudflare Pages"), "Privacy page missing hosting provider description");
    assert(privacyHtml.includes("Natkhat"), "Privacy page missing product boundary mention");
    assert(privacyHtml.includes("baby photos") || privacyHtml.includes("facial processing"), "Privacy page must clarify product separation");
    assert(privacyHtml.includes("Last updated:"), "Privacy page missing Last updated date");

    const termsHtml = fs.readFileSync(path.join(DIST_DIR, "terms/index.html"), "utf-8");
    assert(termsHtml.includes("Terms of Use"), "Terms page missing title");
    assert(termsHtml.includes("oyechilli.com"), "Terms page missing scope");
    assert(termsHtml.includes("Mumbai, Maharashtra, India"), "Terms page missing jurisdiction");
    assert(termsHtml.includes("Last updated:"), "Terms page missing Last updated date");

    const refundsHtml = fs.readFileSync(path.join(DIST_DIR, "refunds/index.html"), "utf-8");
    assert(refundsHtml.includes("Cancellation &amp; Refund Policy") || refundsHtml.includes("Cancellation & Refund Policy"), "Refunds page missing title");
    assert(refundsHtml.includes("Google Play"), "Refunds page missing app store channel explanation");
    assert(refundsHtml.includes("direct checkout") || refundsHtml.includes("checkout"), "Refunds page missing future direct sales clause");
    assert(refundsHtml.includes("Last updated:"), "Refunds page missing Last updated date");
  });

  // Test 4: Strict Negatives Check across all generated HTML files
  test("Strict negative constraints (no private limited, no D-U-N-S, no fake claims, no personal data)", () => {
    const htmlFiles = [
      "index.html",
      "contact/index.html",
      "privacy/index.html",
      "terms/index.html",
      "refunds/index.html",
      "404.html"
    ];

    const forbiddenPatterns = [
      { regex: /private limited/i, desc: "Private limited description" },
      { regex: /pvt\.?\s*ltd/i, desc: "Pvt Ltd description" },
      { regex: /incorporated|incorporation/i, desc: "Claim of incorporation" },
      { regex: /d-u-n-s|duns/i, desc: "D-U-N-S number" },
      { regex: /registered trademark/i, desc: "Registered trademark claim" },
      { regex: /industry-leading/i, desc: "Industry-leading claim" },
      { regex: /cookie-banner|cookieConsent/i, desc: "Cookie banner" },
      { regex: /@gmail\.com/i, desc: "Personal Gmail address" }
    ];

    for (const file of htmlFiles) {
      const content = fs.readFileSync(path.join(DIST_DIR, file), "utf-8");
      for (const { regex, desc } of forbiddenPatterns) {
        assert(!regex.test(content), `Found forbidden pattern '${desc}' in ${file}`);
      }
    }
  });

  // Test 5: SEO and Accessibility verification
  test("SEO files and accessibility attributes are correctly formatted", () => {
    // Sitemap
    const sitemap = fs.readFileSync(path.join(DIST_DIR, "sitemap.xml"), "utf-8");
    assert(sitemap.includes("https://oyechilli.com/"), "Sitemap missing root");
    assert(sitemap.includes("https://oyechilli.com/contact"), "Sitemap missing contact");
    assert(sitemap.includes("https://oyechilli.com/privacy"), "Sitemap missing privacy");
    assert(sitemap.includes("https://oyechilli.com/terms"), "Sitemap missing terms");
    assert(sitemap.includes("https://oyechilli.com/refunds"), "Sitemap missing refunds");

    // Robots.txt
    const robots = fs.readFileSync(path.join(DIST_DIR, "robots.txt"), "utf-8");
    assert(robots.includes("User-agent: *"), "Robots.txt missing User-agent");
    assert(robots.includes("Allow: /"), "Robots.txt missing Allow");
    assert(robots.includes("Sitemap: https://oyechilli.com/sitemap.xml"), "Robots.txt missing Sitemap reference");

    // CSS check
    const css = fs.readFileSync(path.join(DIST_DIR, "assets/css/style.css"), "utf-8");
    assert(css.includes("prefers-reduced-motion"), "CSS missing prefers-reduced-motion media query");
    assert(css.includes(":focus-visible"), "CSS missing :focus-visible rules");
    assert(css.includes(".skip-link"), "CSS missing skip-link styles");

    // Google Site Verification
    const indexHtml = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");
    assert(indexHtml.includes('name="google-site-verification"'), "Missing google-site-verification tag in index.html");
    assert(indexHtml.includes('avOekOxO2TkOFZAlL7kIVcFgci9fvDElJdopjKVcps8'), "Missing exact Google verification token");
  });

  console.log(`\nVerification complete: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
