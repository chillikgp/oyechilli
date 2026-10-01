/**
 * 404 Not Found Page Template
 */

import { siteConfig } from "../site.config.js";
import { renderMeta } from "../components/meta.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { icons, productIllustrations } from "../components/icons.js";

export function render404Page() {
  const metaHtml = renderMeta({
    title: "Page Not Found (404)",
    description: "The page you are looking for does not exist on oyechilli.com.",
    path: "/404.html"
  });

  const headerHtml = renderHeader("/404");
  const footerHtml = renderFooter();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${metaHtml}
</head>
<body>
  ${headerHtml}

  <main id="main-content" class="main-content" tabindex="-1">
    <div class="container">
      <div class="error-page-container">
        ${productIllustrations.error404()}
        <span class="error-code">Error 404</span>
        <h1 class="error-title">Page not found</h1>
        <p class="error-desc">
          Looks like this page took a wrong turn or doesn't exist. Let's get you back to the right place.
        </p>
        <div class="error-actions">
          <a href="/" class="btn btn-primary">
            <span>Back to Homepage</span>
          </a>
          <a href="/#products" class="btn btn-secondary">
            <span>Explore our products</span>
          </a>
          <a href="/contact" class="btn btn-subtle">
            <span>Contact Studio</span>
          </a>
        </div>
      </div>
    </div>
  </main>

  ${footerHtml}
</body>
</html>`;
}
