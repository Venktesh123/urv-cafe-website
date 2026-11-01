import type { Metadata } from "next";
import ContactBlock from "@/components/ContactBlock";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Contact URV Cafe Rewari: call ${site.phone}, WhatsApp, or email ${site.email}. Get directions, place orders and ask about party bookings.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & Location | ${site.name} Rewari`,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">We&apos;d love to hear from you</p>
          <h1>Contact URV Cafe</h1>
          <p className="lead">Orders, group bookings, feedback — call, WhatsApp or drop us a message.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <ContactBlock />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="msg-h">
        <div className="container narrow">
          <div className="section-head">
            <h2 id="msg-h">Send us a message</h2>
            <p className="muted">Your message opens in WhatsApp or your email app, ready to send.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
