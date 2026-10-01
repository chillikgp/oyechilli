/**
 * Oye Chilli - Studio Website Configuration
 * Central source of truth for business details, navigation, product listings, and SEO.
 * Update values here to modify details across the entire website.
 */

export const siteConfig = {
  // Business & Brand Details
  brand: {
    name: "Oye Chilli",
    legalName: "OYE CHILLI",
    structure: "Sole proprietorship",
    tagline: "A little spice. A lot of possibility.",
    description: "We make playful apps and useful digital tools for everyday life.",
    aboutShort: "Oye Chilli is an independent digital studio based in Mumbai, India. We make playful apps and useful digital tools for everyday life, with a focus on thoughtful design and everyday usefulness.",
    aboutDetailed: "We are an independent software and creative studio focused on thoughtful craft, intuitive interfaces, and practical delight. We build products we genuinely love using—keeping them focused, respectful of privacy, and designed for real everyday moments.",
    email: "hello@oyechilli.com",
    location: "Mumbai, Maharashtra, India",
    cityCountry: "Mumbai, India",
    udyamRegistration: "UDYAM-MH-18-0588472",
    foundingYear: 2024,
    currentYear: 2026,
    url: "https://oyechilli.com",
  },

  // Products Showcase
  // Factual product entries. External buttons and links are strictly configurable.
  products: [
    {
      id: "natkhat",
      name: "Natkhat",
      badge: "Baby Keepsakes",
      tagline: "Turn everyday baby photos into beautiful themed photos and milestone memories.",
      description: "Turn everyday baby photos into beautiful themed photos and milestone memories.",
      accentColor: "#E05A47",
      links: [
        {
          label: "Visit website",
          url: "https://www.natkhat.app/",
          type: "primary",
          rel: "noopener noreferrer",
          target: "_blank"
        },
        {
          label: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.natkhat.app",
          type: "secondary",
          icon: "google-play",
          rel: "noopener noreferrer",
          target: "_blank"
        }
      ]
    },
    {
      id: "huhu",
      name: "huhu!",
      badge: "Word Puzzle",
      tagline: "A playful Hindi crossword and word puzzle game.",
      description: "A playful Hindi crossword and word puzzle game.",
      accentColor: "#D97706",
      links: [
        {
          label: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.huhu.puzzle",
          type: "primary",
          icon: "google-play",
          rel: "noopener noreferrer",
          target: "_blank"
        }
      ]
    },
    {
      id: "pickal",
      name: "Pickal",
      badge: "Gallery Tool",
      tagline: "A client photo gallery tool that helps photographers share galleries and lets clients browse and select their favourite photos.",
      description: "A client photo gallery tool that helps photographers share galleries and lets clients browse and select their favourite photos.",
      accentColor: "#2563EB",
      // Configurable destination: kept empty until a verified destination is supplied.
      // Omit external CTA buttons and do NOT label "live" or "coming soon".
      links: []
    }
  ],

  // Navigation Links
  navigation: [
    { label: "Products", href: "/#products" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" }
  ],

  // Footer & Legal Links
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cancellation & Refund Policy", href: "/refunds" },
    { label: "Contact", href: "/contact" }
  ],

  // Policy & Legal Page Metadata
  legal: {
    lastUpdated: "October 1, 2026",
    effectiveDate: "October 1, 2026",
    reviewNotice: "This document is a draft prepared for owner review. It reflects the technical operation of oyechilli.com at launch and does not constitute formal legal counsel."
  },

  // SEO & OpenGraph Defaults
  seo: {
    titleSuffix: "Oye Chilli — Independent Software & Creative Studio",
    defaultTitle: "Oye Chilli — A little spice. A lot of possibility.",
    defaultDescription: "Oye Chilli is an independent Indian software and creative studio in Mumbai making useful, playful digital products for everyday life.",
    siteUrl: "https://oyechilli.com",
    themeColor: "#FAF7F2",
    ogImage: "/assets/images/og-image.png",
    locale: "en_IN"
  },

  // Site Verification
  verification: {
    google: "avOekOxO2TkOFZAlL7kIVcFgci9fvDElJdopjKVcps8"
  }
};

export default siteConfig;
