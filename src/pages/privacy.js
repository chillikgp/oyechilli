/**
 * Privacy Policy Page Template
 * Scoped strictly to oyechilli.com, factual, and distinguishing product-level policies.
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { icons } from "../components/icons.js";

export function renderPrivacyPage() {
  const metaHtml = renderMeta({
    title: "Privacy Policy",
    description: "Privacy policy for oyechilli.com, the studio website of Oye Chilli. Clear, factual disclosure of minimal data practices.",
    path: "/privacy"
  });

  const headerHtml = renderHeader("/privacy");
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
        <h1 class="page-title">Privacy Policy</h1>
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

          <h2>1. Scope of This Policy</h2>
          <p>
            This Privacy Policy applies solely to the studio website located at <strong>oyechilli.com</strong>, operated by <strong>${siteConfig.brand.legalName}</strong> (a sole proprietorship based in ${siteConfig.brand.location}).
          </p>
          <p>
            It governs only information handled when you visit or interact with this specific informational website.
          </p>

          <h2>2. Important: Independent Product Privacy Policies</h2>
          <p>
            Oye Chilli develops and publishes independent digital products, including <strong>Natkhat</strong>, <strong>huhu!</strong>, and <strong>Pickal</strong>.
          </p>
          <p>
            <strong>This website privacy policy does not govern, apply to, or cover data processed within individual applications or services.</strong> Specifically:
          </p>
          <ul>
            <li>This policy does not cover baby photos, milestone memories, camera inputs, or facial processing associated with <strong>Natkhat</strong>.</li>
            <li>This policy does not cover gameplay, word submissions, or device identifiers associated with <strong>huhu!</strong>.</li>
            <li>This policy does not cover client galleries, photographic uploads, or proofing selections associated with <strong>Pickal</strong>.</li>
          </ul>
          <p>
            Each standalone product maintains its own dedicated privacy policy and terms accessible within the respective app or at its specific web address (such as <a href="https://www.natkhat.app/" target="_blank" rel="noopener noreferrer">natkhat.app</a> or on Google Play).
          </p>

          <h2>3. Information We Collect on oyechilli.com</h2>
          <p>
            We practice aggressive data minimization. The website <strong>oyechilli.com</strong> does not require user registration, does not offer account logins, does not use cookies, and does not process payments. We only collect the minimal technical data necessary to serve web pages and process voluntary correspondence:
          </p>

          <h3>A. Hosting &amp; Technical Connection Data</h3>
          <p>
            When you visit oyechilli.com, our static hosting and content delivery network (Cloudflare Pages) automatically processes standard web server request data. This may include:
          </p>
          <ul>
            <li>Your Internet Protocol (IP) address;</li>
            <li>Browser type, language, and operating system;</li>
            <li>The specific page or asset requested;</li>
            <li>Date, time, and referring web address.</li>
          </ul>
          <p>
            This information is used strictly to transmit requested pages, monitor site reliability, prevent automated abuse, and mitigate Distributed Denial of Service (DDoS) attacks.
          </p>

          <h3>B. Voluntary Email Communications</h3>
          <p>
            If you send an email to <a href="mailto:${siteConfig.brand.email}">${siteConfig.brand.email}</a>, we receive the personal information you choose to provide, including:
          </p>
          <ul>
            <li>Your email address;</li>
            <li>Your display name (as configured in your email client);</li>
            <li>Any information, questions, or feedback included in the subject line and message body.</li>
          </ul>

          <h2>4. What We Do NOT Collect</h2>
          <p>
            To keep our studio site clean, lightweight, and respectful:
          </p>
          <ul>
            <li><strong>No Tracking Pixels:</strong> We do not load third-party ad pixels (e.g., Meta Pixel, TikTok pixel).</li>
            <li><strong>No Third-Party Analytics Trackers:</strong> We do not inject behavioral surveillance or cross-site tracking scripts.</li>
            <li><strong>No Cookies:</strong> We do not place cookies or persistent browser storage mechanisms on your device. Consequently, no cookie consent banner is needed.</li>
            <li><strong>No Accounts or Passwords:</strong> We do not collect personal login credentials.</li>
            <li><strong>No Financial Data:</strong> We do not collect credit cards, bank details, or billing addresses on this website.</li>
          </ul>

          <h2>5. How We Use Information</h2>
          <p>
            Any information received is used exclusively for legitimate business purposes:
          </p>
          <ul>
            <li>To respond to your inquiries, bug reports, and correspondence;</li>
            <li>To ensure the technical availability, security, and integrity of oyechilli.com;</li>
            <li>To comply with legal or regulatory obligations applicable in India.</li>
          </ul>

          <h2>6. Third-Party Service Providers</h2>
          <p>
            We engage reputable infrastructure providers to operate oyechilli.com:
          </p>
          <ul>
            <li><strong>Hosting &amp; CDN:</strong> Cloudflare, Inc. (Cloudflare Pages), providing edge hosting, SSL encryption, and security mitigation.</li>
            <li><strong>Email Routing &amp; Storage:</strong> Our email service provider, used solely to receive, transmit, and store emails sent to ${siteConfig.brand.email}.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your contact information or correspondence with third parties.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            Technical server logs are retained by our hosting provider in accordance with standard infrastructure logging cycles (typically 30 days or less unless required for security investigations). Email correspondence is retained only as long as necessary to address your inquiry and fulfill basic studio administrative record-keeping.
          </p>

          <h2>8. Contact &amp; Privacy Inquiries</h2>
          <p>
            If you have questions about this privacy statement or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>OYE CHILLI</strong><br>
            Attention: Privacy &amp; Data Contact<br>
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
