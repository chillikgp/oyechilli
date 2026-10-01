/**
 * Terms of Use Page Template
 * Clear terms covering the studio website, IP ownership, external links, and reasonable limitations.
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { icons } from "../components/icons.js";

export function renderTermsPage() {
  const metaHtml = renderMeta({
    title: "Terms of Use",
    description: "Terms of use governing access to oyechilli.com, the official website of Oye Chilli studio.",
    path: "/terms"
  });

  const headerHtml = renderHeader("/terms");
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
        <h1 class="page-title">Terms of Use</h1>
        <div class="page-meta">
          <span class="meta-item">
            ${icons.document()}
            <span>Last updated: ${siteConfig.legal.lastUpdated}</span>
          </span>
          <span class="meta-item">
            ${icons.shield()}
            <span>Scope: oyechilli.com</span>
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

          <h2>1. Introduction &amp; Acceptance</h2>
          <p>
            Welcome to <strong>oyechilli.com</strong>. These Terms of Use govern your access to and browsing of this website, which is published and operated by <strong>${siteConfig.brand.legalName}</strong>, an independent studio operating as a sole proprietorship in ${siteConfig.brand.location}.
          </p>
          <p>
            By accessing or using oyechilli.com, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you should discontinue use of this website.
          </p>

          <h2>2. Informational Scope &amp; Product Boundaries</h2>
          <p>
            The website <strong>oyechilli.com</strong> is an informational portfolio and studio website intended to introduce OYE CHILLI and showcase our digital projects.
          </p>
          <p>
            <strong>Product-Specific Terms:</strong> Oye Chilli designs and publishes distinct software products and applications, including <em>Natkhat</em>, <em>huhu!</em>, and <em>Pickal</em>. The installation, license, subscription, and everyday use of any specific product are governed exclusively by that product's own end-user terms and agreements (accessible within the respective app or at its product address). Nothing on this studio website amends, replaces, or supersedes those product agreements.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All original materials, text, brand identifiers, custom illustrations, graphic elements, interface designs, and code found on <strong>oyechilli.com</strong> are the property of <strong>${siteConfig.brand.legalName}</strong>, unless otherwise noted.
          </p>
          <p>
            You may browse, view, and share links to this website for personal, non-commercial, or journalistic reference. You may not reproduce, duplicate, modify, distribute, or create derivative works from the content of this website without prior written permission from OYE CHILLI.
          </p>

          <h2>4. Acceptable Use of This Website</h2>
          <p>
            When accessing oyechilli.com, you agree not to:
          </p>
          <ul>
            <li>Engage in any activity that impairs, overburdens, or disrupts the availability or proper functioning of the site or its underlying infrastructure;</li>
            <li>Attempt unauthorized access to any system, server, or network connected to the website;</li>
            <li>Use automated scripts, scrapers, or bots in a manner that degrades performance or circumvents technical rate limits;</li>
            <li>Impersonate Oye Chilli, its proprietor, or falsely claim affiliation with or endorsement by our studio.</li>
          </ul>

          <h2>5. Links to External Sites &amp; Platforms</h2>
          <p>
            This website provides links to external websites and third-party platforms (such as the Google Play Store or dedicated product web domains). These links are provided solely for your convenience.
          </p>
          <p>
            OYE CHILLI does not control, maintain, or assume responsibility for the availability, content, or data privacy practices of external third-party platforms. Following external links is at your own discretion and subject to the respective terms and privacy policies of those platforms.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            This studio website is provided on an "as is" and "as available" basis without representations or warranties of any kind, whether express, statutory, or implied. While we strive to maintain accurate and up-to-date studio and product descriptions, we do not warrant that all site content will be uninterrupted, error-free, or entirely complete at all times.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted under applicable law, ${siteConfig.brand.legalName} shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, inability to access, or reliance upon the informational content on oyechilli.com.
          </p>

          <h2>8. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms of Use shall be governed by, interpreted, and construed in accordance with the substantive laws of the Republic of India. Any disputes or claims arising out of or in connection with these Terms or your use of oyechilli.com shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
          </p>

          <h2>9. Modifications to These Terms</h2>
          <p>
            We may revise these Terms of Use from time to time to reflect operational or legal updates. Any changes will be posted directly to this page with an updated "Last updated" date. Continued browsing of the site after updates indicates acceptance of the revised terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For any questions or notices regarding these Terms, please contact:
          </p>
          <p>
            <strong>OYE CHILLI</strong><br>
            Location: ${siteConfig.brand.location}<br>
            Email: <a href="mailto:${siteConfig.brand.email}">${siteConfig.brand.email}</a>
          </p>
        </article>
      </div>
    </div>
  </main>

  ${footerHtml}
</body>
</html>`;
}
