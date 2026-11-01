import { fullAddress, mapsEmbed, mapsLink, site, whatsappLink } from "@/lib/site";

export default function ContactBlock() {
  return (
    <div className="contact-grid">
      <div className="contact-cards">
        <a href={site.phoneHref} className="contact-card">
          <span className="cc-icon" aria-hidden="true">📞</span>
          <span>
            <small>Call us</small>
            <strong>{site.phone}</strong>
          </span>
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="cc-icon" aria-hidden="true">💬</span>
          <span>
            <small>WhatsApp</small>
            <strong>Order on WhatsApp</strong>
          </span>
        </a>
        <a href={`mailto:${site.email}`} className="contact-card">
          <span className="cc-icon" aria-hidden="true">✉️</span>
          <span>
            <small>Email</small>
            <strong>{site.email}</strong>
          </span>
        </a>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="cc-icon" aria-hidden="true">📍</span>
          <span>
            <small>Find us</small>
            <strong>{fullAddress}</strong>
            <em>Get directions →</em>
          </span>
        </a>
      </div>
      <div className="map">
        <iframe
          title={`Map showing ${site.name}, Rewari`}
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
