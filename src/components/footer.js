/**
 * Shared Footer Component
 * Factual, legally transparent, and free of inflated claims.
 */

import { siteConfig } from "../site.config.js";
import { icons } from "./icons.js";

export function renderFooter() {
  const year = siteConfig.brand.currentYear || new Date().getFullYear();

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top">
          <!-- Enterprise Identity -->
          <div class="footer-brand">
            <div class="footer-brand-title">
              ${icons.chilli()}
              <span>${siteConfig.brand.name}</span>
            </div>
            <p class="footer-legal-desc">
              <strong>${siteConfig.brand.legalName}</strong> is an independent software and creative studio operating as a ${siteConfig.brand.structure.toLowerCase()} based in ${siteConfig.brand.location}.
            </p>
            <div class="footer-registration">
              <span>Udyam Reg:</span>
              <strong>${siteConfig.brand.udyamRegistration}</strong>
            </div>
          </div>

          <!-- Studio & Legal Navigation -->
          <div class="footer-nav">
            <div class="footer-nav-title">Studio &amp; Legal</div>
            <ul class="footer-nav-links">
              ${siteConfig.footerLinks.map(link => `
                <li><a href="${link.href}" class="footer-link">${link.label}</a></li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-location">
            ${icons.mapPin()}
            <span>${siteConfig.brand.legalName} · ${siteConfig.brand.cityCountry}</span>
          </div>
          <div class="footer-copyright">
            &copy; ${year} ${siteConfig.brand.legalName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `;
}
