/**
 * Product Card Component
 * Renders factual, accessible product cards.
 * If links are empty, omits CTA buttons and does not invent launch statuses.
 */

import { icons, productIllustrations } from "./icons.js";

export function renderProductCard(product) {
  // Render bespoke illustration based on product ID
  const illustration = productIllustrations[product.id] 
    ? productIllustrations[product.id]() 
    : `<div class="product-art-placeholder"></div>`;

  // Render link buttons if available
  const hasLinks = Array.isArray(product.links) && product.links.length > 0;
  
  let actionsHtml = "";
  if (hasLinks) {
    actionsHtml = `
      <div class="product-actions">
        ${product.links.map(link => {
          const isPrimary = link.type === "primary";
          const btnClass = isPrimary ? "btn btn-primary" : "btn btn-secondary";
          
          let iconHtml = icons.externalLink();
          if (link.icon === "google-play") {
            iconHtml = icons.googlePlay();
          }

          return `
            <a href="${link.url}" 
               class="${btnClass}" 
               ${link.target ? `target="${link.target}"` : ""} 
               ${link.rel ? `rel="${link.rel}"` : ""}
               aria-label="${product.name}: ${link.label} (opens in new window)">
              ${iconHtml}
              <span>${link.label}</span>
            </a>
          `;
        }).join("")}
      </div>
    `;
  } else {
    // Factual presentation for Pickal: no external button, no "live" or "coming soon" label
    actionsHtml = `
      <div class="product-actions product-actions-empty">
        <span class="product-notice">
          ${icons.document()}
          <span>Product details and preview links will be published once available.</span>
        </span>
      </div>
    `;
  }

  return `
    <article class="product-card" id="product-${product.id}">
      <div class="product-art">
        ${illustration}
      </div>
      <div class="product-body">
        <div class="product-header-line">
          <h3 class="product-name">${product.name}</h3>
          <span class="product-badge">${product.badge}</span>
        </div>
        <p class="product-desc">${product.description}</p>
        ${actionsHtml}
      </div>
    </article>
  `;
}
