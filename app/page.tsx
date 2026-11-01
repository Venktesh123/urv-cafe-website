import Image from "next/image";
import Link from "next/link";
import Offers from "@/components/Offers";
import ContactBlock from "@/components/ContactBlock";
import { allItems, formatPrice, menu } from "@/data/menu";
import { site } from "@/lib/site";

const minPrice = Math.min(...allItems.map((i) => i.price));

const faqs = [
  {
    q: "Where is URV Cafe located?",
    a: `URV Cafe is in Rewari, Haryana. Call ${site.phone} or tap "Get directions" on this page for the exact location.`,
  },
  {
    q: "What does URV Cafe serve and how much does it cost?",
    a: `Cold coffee, shakes, mojitos, chai, momos, Maggi, fries, burgers, sandwiches, pasta, 7-inch pizzas, waffles and desserts. Prices start at ${formatPrice(minPrice)} (Basic Chai) and go up to ₹189 (Farmhouse Pizza).`,
  },
  {
    q: "Is there a student discount?",
    a: "Yes — show a college or student ID and get 10% off.",
  },
  {
    q: "Are there any combo offers?",
    a: "Duo Deal: any food item with any drink, shake or mojito gets 5% off. Trio Treat: any 3 items get 10% off. Squad Bonus: spend ₹500 or more and get a free ice cream.",
  },
  {
    q: "How can I place an order or contact the cafe?",
    a: `Call ${site.phone}, message us on WhatsApp, or email ${site.email}.`,
  },
];

export default function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="leaf leaf-1" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cafe • Rewari</p>
            <h1>
              Chilled shakes, fresh mojitos &amp; <em>good vibes</em> in Rewari
            </h1>
            <p className="lead">
              From ₹{minPrice} kulhad chai to cheesy 7-inch pizzas, heart waffles and brownies with ice cream —
              freshly made, every order.
            </p>
            <div className="hero-cta">
              <Link href="/menu" className="btn btn-primary btn-lg">View full menu</Link>
              <a href={site.phoneHref} className="btn btn-ghost btn-lg">📞 {site.phone}</a>
            </div>
            <ul className="hero-stats">
              <li><strong>{allItems.length}+</strong><span>menu items</span></li>
              <li><strong>₹{minPrice}</strong><span>starting price</span></li>
              <li><strong>10%</strong><span>student offer</span></li>
            </ul>
          </div>

          <div className="hero-art">
            <div className="hero-card hc-1">
              <Image src="/images/cold-coffee.webp" alt="Oreo cold coffee shake" fill sizes="(max-width: 760px) 45vw, 260px" priority />
            </div>
            <div className="hero-card hc-2">
              <Image src="/images/pizza.webp" alt="7-inch pizza" fill sizes="(max-width: 760px) 45vw, 280px" priority />
            </div>
            <div className="hero-card hc-3">
              <Image src="/images/mojitos.webp" alt="Watermelon and green apple mojitos" fill sizes="(max-width: 760px) 50vw, 300px" />
            </div>
            <div className="price-pill">Cold Coffee <b>₹99</b></div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" aria-labelledby="cats-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our menu</p>
            <h2 id="cats-h">Something for every craving</h2>
            <p className="muted">Tap a category to see every item and price.</p>
          </div>
          <div className="cat-grid">
            {menu.map((c) => {
              const from = Math.min(...c.items.map((i) => i.price));
              return (
                <Link key={c.id} href={`/menu#${c.id}`} className="cat-card">
                  <div className="cat-card-img">
                    <Image src={c.image} alt={c.imageAlt} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 280px" />
                  </div>
                  <div className="cat-card-body">
                    <h3>{c.title}</h3>
                    <p>
                      {c.items.length} items · from <b>{formatPrice(from)}</b>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="center">
            <Link href="/menu" className="btn btn-primary">See all prices</Link>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="section section-tint" aria-labelledby="offers-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Save more</p>
            <h2 id="offers-h">Special offers</h2>
            <p className="muted">Bring friends, bring your student ID — and save on every visit.</p>
          </div>
          <Offers />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" aria-labelledby="about-h">
        <div className="container about-grid">
          <div className="about-img">
            <Image src="/images/desserts.webp" alt="Brownie with ice cream at URV Cafe" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow">About us</p>
            <h2 id="about-h">Your neighbourhood hangout in Rewari</h2>
            <p>
              URV Cafe is where Rewari comes to chill — whether it&apos;s a ₹29 cup of chai between classes, a
              Blue Lagoon mojito on a hot afternoon, or pizza and waffles with the whole squad.
            </p>
            <p>
              Every shake is freshly blended, every mojito is made to order and every snack is prepared fresh. Great
              food, fair prices and good vibes — that&apos;s the URV way.
            </p>
            <ul className="ticks">
              <li>Freshly blended &amp; chilled drinks</li>
              <li>Made-to-order food</li>
              <li>Combo &amp; student discounts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-tint" aria-labelledby="faq-h">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2 id="faq-h">Frequently asked questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" aria-labelledby="visit-h">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Visit or order</p>
            <h2 id="visit-h">Come say hi</h2>
          </div>
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
