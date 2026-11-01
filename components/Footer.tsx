import Link from "next/link";
import { menu } from "@/data/menu";
import { fullAddress, mapsLink, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">URV</p>
          <p className="footer-sub">CAFE • REWARI</p>
          <p className="muted-light">{site.tagline}</p>
        </div>

        <div>
          <h2 className="footer-h">Menu</h2>
          <ul className="footer-list">
            {menu.map((c) => (
              <li key={c.id}>
                <Link href={`/menu#${c.id}`}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Contact</h2>
          <address className="footer-list">
            <a href={site.phoneHref}>📞 {site.phone}</a>
            <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">💬 WhatsApp us</a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">📍 {fullAddress}</a>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}, Rewari. All rights reserved.</p>
        <p>Prices in ₹ and subject to change.</p>
      </div>
    </footer>
  );
}
