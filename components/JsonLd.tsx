import { menu, offers } from "@/data/menu";
import { site, mapsLink } from "@/lib/site";

// Schema.org structured data so Google can show the cafe, its menu
// and prices directly in search results / Maps.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop"],
    "@id": `${site.url}/#cafe`,
    name: site.name,
    alternateName: [site.legalName, "URV Cafe Rewari"],
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: [`${site.url}/og-image.jpg`, `${site.url}/images/pizza.webp`, `${site.url}/images/mojitos.webp`],
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: "INR",
    servesCuisine: ["Cafe", "Fast Food", "Italian", "Indian", "Desserts", "Beverages"],
    hasMap: mapsLink,
    address: {
      "@type": "PostalAddress",
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Rewari" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    makesOffer: offers.map((o) => ({
      "@type": "Offer",
      name: o.title,
      description: o.text,
    })),
    hasMenu: {
      "@type": "Menu",
      name: `${site.name} Menu`,
      url: `${site.url}/menu`,
      inLanguage: "en-IN",
      hasMenuSection: menu.map((c) => ({
        "@type": "MenuSection",
        name: c.title,
        ...(c.note ? { description: c.note } : {}),
        image: `${site.url}${c.image}`,
        hasMenuItem: c.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          offers: { "@type": "Offer", price: i.price.toFixed(2), priceCurrency: "INR" },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
