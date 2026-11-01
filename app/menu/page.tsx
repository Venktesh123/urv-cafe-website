import type { Metadata } from "next";
import MenuExplorer from "@/components/MenuExplorer";
import Offers from "@/components/Offers";
import { allItems } from "@/data/menu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu & Prices",
  description: `Full URV Cafe Rewari menu with prices: cold coffee ₹99, mojitos ₹109–119, kulhad chai ₹39, momos, Maggi, fries, burgers from ₹69, pasta, 7-inch pizzas, waffles and desserts. ${allItems.length} items starting at ₹29.`,
  alternates: { canonical: "/menu" },
  openGraph: {
    title: `Menu & Prices | ${site.name} Rewari`,
    url: `${site.url}/menu`,
  },
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Freshly blended • Chilled • Made to order</p>
          <h1>Our Menu</h1>
          <p className="lead">
            {allItems.length} items, all prices in ₹. Filter by drinks, food or sweets — or just search.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <MenuExplorer />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="menu-offers-h">
        <div className="container">
          <div className="section-head">
            <h2 id="menu-offers-h">Special offers</h2>
          </div>
          <Offers />
          <p className="center muted small">
            Ask at the counter or call <a href={site.phoneHref}>{site.phone}</a> for details.
          </p>
        </div>
      </section>
    </>
  );
}
