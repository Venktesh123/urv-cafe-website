"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

// No server needed: the form opens WhatsApp or the email app
// with the message already filled in.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const compose = () =>
    `Hi URV Cafe!\n\nName: ${name}\nPhone: ${phone}\n\n${message}`;

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(compose()), "_blank", "noopener,noreferrer");
  };

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${name || "website"}`
  )}&body=${encodeURIComponent(compose())}`;

  return (
    <form className="contact-form" onSubmit={sendWhatsApp}>
      <label>
        Your name
        <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          inputMode="tel"
        />
      </label>
      <label>
        Message
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Order, party booking, feedback…"
        />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">Send on WhatsApp</button>
        <a href={mailHref} className="btn btn-ghost">Send by email</a>
      </div>
    </form>
  );
}
