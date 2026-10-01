/**
 * Shared Header Component
 */

import { siteConfig } from "../site.config.js";
import { icons } from "./icons.js";

export function renderHeader(currentPath = "/") {
  const isHome = currentPath === "/";

  // Products and About links should link to anchor on home page, or /#anchor from other pages
  const navItems = [
    { label: "Products", href: isHome ? "#products" : "/#products" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Contact", href: "/contact", isActive: currentPath === "/contact" }
  ];

  return `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <!-- Brand Wordmark -->
        <a href="/" class="brand-link" aria-label="${siteConfig.brand.name} homepage">
          ${icons.chilli()}
          <span class="brand-name">Oye <span class="brand-name-accent">Chilli</span></span>
        </a>

        <!-- Desktop & Mobile Navigation -->
        <nav class="site-nav" role="navigation" aria-label="Main Navigation">
          <button class="mobile-nav-toggle" id="mobileNavToggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation menu">
            <span class="icon-open">${icons.menu()}</span>
            <span class="icon-close" style="display: none;">${icons.close()}</span>
          </button>

          <ul class="nav-menu" id="primaryNav">
            ${navItems.map(item => `
              <li class="nav-item">
                <a href="${item.href}" class="nav-link ${item.isActive ? "active" : ""}">
                  ${item.label}
                </a>
              </li>
            `).join("")}
          </ul>
        </nav>
      </div>
    </header>

    <!-- Vanilla Accessible Navigation Script -->
    <script>
      (function() {
        const toggle = document.getElementById('mobileNavToggle');
        const menu = document.getElementById('primaryNav');
        if (!toggle || !menu) return;

        const openIcon = toggle.querySelector('.icon-open');
        const closeIcon = toggle.querySelector('.icon-close');

        function toggleMenu(open) {
          const isOpen = open !== undefined ? open : toggle.getAttribute('aria-expanded') !== 'true';
          toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          menu.classList.toggle('is-open', isOpen);
          if (openIcon && closeIcon) {
            openIcon.style.display = isOpen ? 'none' : 'block';
            closeIcon.style.display = isOpen ? 'block' : 'none';
          }
        }

        toggle.addEventListener('click', function() {
          toggleMenu();
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu(false);
            toggle.focus();
          }
        });

        // Close menu when clicking nav links
        menu.querySelectorAll('a').forEach(function(link) {
          link.addEventListener('click', function() {
            toggleMenu(false);
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
          if (!menu.contains(e.target) && !toggle.contains(e.target) && toggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu(false);
          }
        });
      })();
    </script>
  `;
}
