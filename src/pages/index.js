/**
 * Homepage Template
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { renderProductCard } from "../components/product-card.js";
import { icons } from "../components/icons.js";

export function renderHomePage() {
  const metaHtml = renderMeta({
    title: "", // Uses default brand title
    description: siteConfig.brand.description,
    path: "/"
  });

  const headerHtml = renderHeader("/");
  const footerHtml = renderFooter();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${metaHtml}
</head>
<body>
  ${headerHtml}

  <main id="main-content" class="main-content" tabindex="-1">
    <!-- Hero Section -->
    <section class="hero-section" aria-labelledby="hero-heading">
      <div class="container">
        <div class="hero-content">
          <div class="hero-pill">
            <span class="hero-pill-dot"></span>
            <span>Independent Studio &middot; ${siteConfig.brand.cityCountry}</span>
          </div>
          <h1 id="hero-heading" class="hero-headline">
            ${siteConfig.brand.tagline}
          </h1>
          <p class="hero-supporting">
            ${siteConfig.brand.description}
          </p>
          <div class="hero-actions">
            <a href="#products" class="btn btn-primary">
              <span>Explore our products</span>
              ${icons.arrowRight()}
            </a>
            <a href="mailto:${siteConfig.brand.email}" class="btn btn-secondary">
              ${icons.mail()}
              <span>Say hello</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="section section-alt" aria-labelledby="products-heading">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">What We Build</span>
          <h2 id="products-heading" class="section-title">Playful apps &amp; useful tools</h2>
          <p class="section-subtitle">
            Distinct digital products designed with care, personality, and everyday utility.
          </p>
        </div>

        <div class="products-grid">
          ${siteConfig.products.map(product => renderProductCard(product)).join("")}
        </div>
      </div>
    </section>

    <!-- About Studio Section -->
    <section id="about" class="section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-card">
          <div class="section-header" style="margin-bottom: 1.5rem;">
            <span class="section-tag">About Oye Chilli</span>
            <h2 id="about-heading" class="section-title">Small studio. Thoughtful work.</h2>
          </div>

          <div class="about-prose">
            <p>
              Oye Chilli is an independent digital studio based in ${siteConfig.brand.location}. We make apps, games, and software tools, with a focus on thoughtful design and everyday usefulness.
            </p>
            <p>
              We believe great software should feel welcoming, run reliably, and respect the people who use it. By staying small and independent, we take the time to refine details, avoid dark patterns, and build digital experiences that bring genuine delight to daily routines.
            </p>
          </div>

          <div class="about-values-grid">
            <div class="value-item">
              <div class="value-icon">${icons.sparkle()}</div>
              <h3 class="value-title">Thoughtfully Crafted</h3>
              <p class="value-desc">Every screen, puzzle, and interaction is designed with intention and a touch of warmth.</p>
            </div>
            <div class="value-item">
              <div class="value-icon">${icons.heart()}</div>
              <h3 class="value-title">Everyday Usefulness</h3>
              <p class="value-desc">We build practical tools that solve real tasks without unnecessary friction or bloat.</p>
            </div>
            <div class="value-item">
              <div class="value-icon">${icons.lock()}</div>
              <h3 class="value-title">Respectfully Built</h3>
              <p class="value-desc">Independent and privacy-respecting. We do not use intrusive trackers or surveillance ads.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="section" style="padding-top: 0;" aria-labelledby="contact-heading">
      <div class="container">
        <div class="contact-banner">
          <div class="contact-banner-content">
            <span class="section-tag">Get In Touch</span>
            <h2 id="contact-heading" class="contact-banner-title">Let’s connect</h2>
            <p class="contact-banner-text">
              Have feedback on our apps, an inquiry about our studio, or an idea to discuss? Send us an email directly at <a href="mailto:${siteConfig.brand.email}" style="color: var(--color-chilli); font-weight: 600;">${siteConfig.brand.email}</a>.
            </p>
          </div>
          <div class="contact-banner-actions">
            <a href="mailto:${siteConfig.brand.email}" class="btn btn-primary">
              ${icons.mail()}
              <span>Email ${siteConfig.brand.email}</span>
            </a>
            <a href="/contact" class="btn btn-secondary">
              <span>View full studio details</span>
              ${icons.arrowRight()}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${footerHtml}
</body>
</html>`;
}
