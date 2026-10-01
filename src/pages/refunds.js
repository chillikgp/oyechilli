/**
 * Cancellation & Refund Policy Page Template
 * Factual disclosure: no direct checkout on studio website; purchases handled via platform channels.
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { icons } from "../components/icons.js";

export function renderRefundsPage() {
  const metaHtml = renderMeta({
    title: "Cancellation & Refund Policy",
    description: "Cancellation and refund policy for Oye Chilli (oyechilli.com). Information on product purchase channels and refund handling.",
    path: "/refunds"
  });

  const headerHtml = renderHeader("/refunds");
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
      <div class="container-prose">
        <div class="breadcrumbs">
          <a href="/" class="breadcrumb-link">
            <span>&larr;</span>
            <span>Back to Home</span>
          </a>
        </div>
        <h1 class="page-title">Cancellation &amp; Refund Policy</h1>
        <div class="page-meta">
          <span class="meta-item">
            ${icons.document()}
            <span>Last updated: ${siteConfig.legal.lastUpdated}</span>
          </span>
          <span class="meta-item">
            ${icons.shield()}
            <span>Scope: oyechilli.com &amp; Products</span>
          </span>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="legal-content">
      <div class="container-prose">
        <article class="legal-article">
          <!-- Draft Notice -->
          <div class="review-callout">
            <strong>Notice for Owner Review:</strong> ${siteConfig.legal.reviewNotice}
          </div>

          <h2>1. Overview &amp; Website Model</h2>
          <p>
            This Cancellation and Refund Policy applies to <strong>${siteConfig.brand.legalName}</strong> (operating as Oye Chilli, a sole proprietorship based in ${siteConfig.brand.location}).
          </p>
          <p>
            At present, the studio website <strong>oyechilli.com</strong> serves strictly as an informational portfolio and showcase. <strong>We do not directly sell products, process card transactions, or collect customer payments on this website.</strong>
          </p>

          <h2>2. Purchases Made via Third-Party Platforms</h2>
          <p>
            Our software applications and games (such as <em>Natkhat</em> and <em>huhu!</em>) are distributed through authorized third-party app marketplaces, primarily the <strong>Google Play Store</strong>.
          </p>
          <p>
            Because payment processing, order fulfillment, subscription billing, and transaction records for these apps are managed directly by the platform provider:
          </p>
          <ul>
            <li><strong>Cancellation &amp; Refund Authority:</strong> Cancellations, subscription management, and refund requests are governed by the respective platform’s terms of service and billing policies (for example, the <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play Refund Policy</a>).</li>
            <li><strong>How to Request a Refund via Google Play:</strong> You can generally request a refund directly through your Google Play account order history on your device or via the Google Play website within the platform's designated request window.</li>
          </ul>

          <h2>3. Product-Specific Purchase Channels</h2>
          <p>
            If a specific product developed by Oye Chilli provides an independent billing or license option in the future (for instance, via a dedicated product website), purchases will be subject to the clear terms published on that product's specific checkout page at the time of purchase.
          </p>

          <h2>4. Notice Regarding Future Direct Website Checkout</h2>
          <p>
            <strong>Requirement Before Direct Sales:</strong> If direct checkout, software licensing, or payment gateway processing is added directly to <code>oyechilli.com</code> in the future, this policy will be formally amended before checkout goes live to specify:
          </p>
          <ul>
            <li>Exact product pricing and currency;</li>
            <li>Delivery timeline and digital fulfillment mechanisms;</li>
            <li>Specific cancellation windows and subscription renewal rules;</li>
            <li>Clear refund eligibility standards and processing timelines.</li>
          </ul>

          <h2>5. Inquiries &amp; Customer Support</h2>
          <p>
            If you have questions regarding an app purchase, need assistance finding your transaction identifier, or require guidance navigating the refund process on Google Play, please reach out to our team:
          </p>
          <p>
            <strong>OYE CHILLI</strong><br>
            Email: <a href="mailto:${siteConfig.brand.email}">${siteConfig.brand.email}</a><br>
            Location: ${siteConfig.brand.location}
          </p>
          <p>
            Please include the name of the app (e.g., Natkhat or huhu!), your platform order number, and a brief description of the issue so we can assist you as effectively as possible.
          </p>
        </article>
      </div>
    </div>
  </main>

  ${footerHtml}
</body>
</html>`;
}
