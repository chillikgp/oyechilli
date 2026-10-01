/**
 * Head Metadata Generator for SEO, Open Graph, and Structured Data
 */

import { siteConfig } from "../site.config.js";

export function renderMeta({
  title,
  description,
  path = "",
  type = "website"
}) {
  const fullTitle = title 
    ? `${title} — ${siteConfig.brand.name}`
    : siteConfig.seo.defaultTitle;
  
  const metaDesc = description || siteConfig.seo.defaultDescription;
  const canonicalUrl = `${siteConfig.brand.url}${path}`;
  const ogImageUrl = `${siteConfig.brand.url}${siteConfig.seo.ogImage}`;

  // Organization & WebSite JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.brand.url}/#organization`,
        "name": siteConfig.brand.name,
        "legalName": siteConfig.brand.legalName,
        "url": siteConfig.brand.url,
        "logo": `${siteConfig.brand.url}/assets/icons/favicon.svg`,
        "email": siteConfig.brand.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "identifier": {
          "@type": "PropertyValue",
          "name": "Udyam Registration",
          "value": siteConfig.brand.udyamRegistration
        },
        "description": siteConfig.brand.description
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.brand.url}/#website`,
        "url": siteConfig.brand.url,
        "name": siteConfig.brand.name,
        "description": siteConfig.brand.description,
        "publisher": {
          "@id": `${siteConfig.brand.url}/#organization`
        }
      }
    ]
  };

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(metaDesc)}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="${siteConfig.seo.themeColor}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(fullTitle)}">
    <meta property="og:description" content="${escapeHtml(metaDesc)}">
    <meta property="og:image" content="${ogImageUrl}">
    <meta property="og:site_name" content="${siteConfig.brand.name}">
    <meta property="og:locale" content="${siteConfig.seo.locale}">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}">
    <meta name="twitter:description" content="${escapeHtml(metaDesc)}">
    <meta name="twitter:image" content="${ogImageUrl}">

    <!-- Favicon & Icons -->
    <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
    <link rel="alternate icon" type="image/png" href="/assets/icons/favicon.png">
    <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(schemaData, null, 2)}
    </script>
  `;
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
