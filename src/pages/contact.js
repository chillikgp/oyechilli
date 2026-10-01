/**
 * Contact Page Template
 * Transparent public business information without exposing private residential data.
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { icons } from "../components/icons.js";

export function renderContactPage() {
  const metaHtml = renderMeta({
    title: "Contact",
    description: "Get in touch with Oye Chilli. Official contact email, studio location in Mumbai, Maharashtra, India, and enterprise registration details.",
    path: "/contact"
  });

  const headerHtml = renderHeader("/contact");
  const footerHtml = renderFooter();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${metaHtml}
</head>
<body>
  ${headerHtml}

  <main id="main-content" class="main-content" tabindex="-1">
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/" class="breadcrumb-link">
            <span>&larr;</span>
            <span>Back to Home</span>
          </a>
        </div>
        <h1 class="page-title">Contact Oye Chilli</h1>
        <p style="font-size: 1.15rem; color: var(--color-text-secondary); max-width: 600px;">
          Reach out for product support, business inquiries, or general questions. We communicate directly via email.
        </p>
      </div>
    </header>

    <!-- Contact Details Section -->
    <div class="container section">
      <div class="contact-grid">
        <!-- Main Contact Information -->
        <div class="contact-card-main">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Direct Communication</h2>
          <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">
            Whether you are using one of our apps or exploring an idea with our studio, write to us directly:
          </p>

          <ul class="contact-info-list">
            <li class="contact-info-item">
              <div class="contact-icon-box">${icons.mail()}</div>
              <div>
                <div class="contact-info-title">Public Contact Email</div>
                <div class="contact-info-value">
                  <a href="mailto:${siteConfig.brand.email}">${siteConfig.brand.email}</a>
                </div>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  Monitored for all studio and product correspondence.
                </p>
              </div>
            </li>

            <li class="contact-info-item">
              <div class="contact-icon-box">${icons.mapPin()}</div>
              <div>
                <div class="contact-info-title">Studio Location</div>
                <div class="contact-info-value">
                  ${siteConfig.brand.location}
                </div>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  Operating in India Standard Time (IST, UTC+5:30).
                </p>
              </div>
            </li>

            <li class="contact-info-item">
              <div class="contact-icon-box">${icons.document()}</div>
              <div>
                <div class="contact-info-title">Registered Enterprise</div>
                <div class="contact-info-value">
                  ${siteConfig.brand.legalName}
                </div>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  ${siteConfig.brand.structure} registered under MSME, Government of India.
                </p>
              </div>
            </li>

            <li class="contact-info-item">
              <div class="contact-icon-box">${icons.shield()}</div>
              <div>
                <div class="contact-info-title">Udyam Registration Number</div>
                <div class="contact-info-value" style="font-family: var(--font-mono); font-size: 1rem;">
                  ${siteConfig.brand.udyamRegistration}
                </div>
                <p style="font-size: 0.825rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  Ministry of Micro, Small &amp; Medium Enterprises (MSME).
                </p>
              </div>
            </li>
          </ul>

          <div style="margin-top: 2.25rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border-subtle);">
            <a href="mailto:${siteConfig.brand.email}" class="btn btn-primary">
              ${icons.mail()}
              <span>Open email client</span>
            </a>
          </div>
        </div>

        <!-- Sidebar / Inquiry Guidance -->
        <aside class="contact-card-sidebar">
          <div class="info-box">
            <h3 class="info-box-title">Product Support</h3>
            <p class="info-box-text">
              If you have questions, feedback, or encountered a bug in <strong>Natkhat</strong> or <strong>huhu!</strong>, please email us with your device model and app version so we can assist promptly.
            </p>
          </div>

          <div class="info-box">
            <h3 class="info-box-title">Response Time</h3>
            <p class="info-box-text">
              We are an independent team and do our best to respond to genuine inquiries within 1 to 2 business days.
            </p>
          </div>

          <div class="info-box" style="background-color: var(--color-surface-subtle);">
            <h3 class="info-box-title" style="font-size: 0.95rem;">Business Notice</h3>
            <p class="info-box-text" style="font-size: 0.85rem; color: var(--color-text-muted);">
              OYE CHILLI is an independent sole proprietorship enterprise registered under the MSME framework of the Government of India.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </main>

  ${footerHtml}
</body>
</html>`;
}
