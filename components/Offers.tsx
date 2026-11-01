import { offers } from "@/data/menu";

export default function Offers() {
  return (
    <div className="offers-grid">
      {offers.map((o) => (
        <article key={o.title} className="offer">
          <div className="offer-badge" aria-hidden="true">
            <strong>{o.badge}</strong>
            <small>{o.badgeSub}</small>
          </div>
          <div>
            <h3>{o.title}</h3>
            <p>{o.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
