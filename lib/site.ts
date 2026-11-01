// Central place for all business details. Edit here and the whole site
// (pages, SEO tags, structured data, sitemap) updates automatically.

export const site = {
  name: "URV Cafe",
  legalName: "The Cafe URV",
  tagline: "Freshly blended • Great food • Good vibes",
  description:
    "URV Cafe in Rewari serves cold coffee, shakes, mojitos, kulhad chai, momos, burgers, sandwiches, pasta, 7-inch pizzas, waffles and desserts at pocket-friendly prices. See the full menu with prices, offers and contact details.",
  // IMPORTANT for SEO: set NEXT_PUBLIC_SITE_URL to your real domain
  // (e.g. https://www.yourdomain.com). On Vercel the production URL is
  // picked up automatically if you haven't set it.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),
  phone: "+91 95188 76813",
  phoneHref: "tel:+919518876813",
  whatsapp: "919518876813",
  email: "urvcafe@gmail.com",
  address: {
    // Add your full street address here when ready; it is used in the
    // footer, contact page and Google structured data.
    street: "",
    city: "Rewari",
    region: "Haryana",
    postalCode: "123401",
    country: "IN",
  },
  // Google Maps search used for the embedded map + "Get directions" link.
  // Replace with your exact place name / address for a precise pin.
  mapQuery: "URV Cafe, Rewari, Haryana",
  priceRange: "₹29 – ₹189",
  keywords: [
    "URV Cafe",
    "URV Cafe Rewari",
    "cafe in Rewari",
    "best cafe Rewari",
    "cold coffee Rewari",
    "mojito Rewari",
    "pizza Rewari",
    "waffles Rewari",
    "momos Rewari",
    "kulhad chai Rewari",
    "cafe menu with prices",
    "student discount cafe Rewari",
  ],
} as const;

export const fullAddress = [
  site.address.street,
  site.address.city,
  site.address.region,
  site.address.postalCode,
]
  .filter(Boolean)
  .join(", ");

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
export const whatsappLink = (text = "Hi URV Cafe! I'd like to place an order.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
