"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { formatPrice, menu, type MenuCategory } from "@/data/menu";

const filters = [
  { id: "all", label: "All" },
  { id: "drinks", label: "Drinks" },
  { id: "food", label: "Food" },
  { id: "sweets", label: "Sweets" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function CategoryBlock({ cat, priority }: { cat: MenuCategory; priority: boolean }) {
  // Keep sub-groups (e.g. Pasta / Pizza, Heart / Stick waffles) together
  const groups = cat.items.reduce<Record<string, typeof cat.items>>((acc, item) => {
    const key = item.group ?? "";
    (acc[key] ||= []).push(item);
    return acc;
  }, {});

  return (
    <section id={cat.id} className="menu-cat" aria-labelledby={`${cat.id}-h`}>
      <div className="menu-cat-img">
        <Image
          src={cat.image}
          alt={cat.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 340px"
          priority={priority}
        />
      </div>
      <div className="menu-cat-body">
        <h2 id={`${cat.id}-h`} className="menu-cat-title">
          <span aria-hidden="true">{cat.icon}</span> {cat.title}
        </h2>
        {cat.note && <p className="menu-note">{cat.note}</p>}
        {Object.entries(groups).map(([group, items]) => (
          <div key={group || "default"}>
            {group && <h3 className="menu-group">{group}</h3>}
            <ul className="price-list">
              {items.map((item) => (
                <li key={item.name}>
                  <span className="item-name">
                    {item.name}
                    {item.popular && <span className="tag">Must try</span>}
                  </span>
                  <span className="dots" aria-hidden="true" />
                  <span className="item-price">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuExplorer() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu
      .filter((c) => filter === "all" || c.kind === filter)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter((i) => i.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q))
          : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [filter, query]);

  return (
    <div>
      <div className="menu-toolbar">
        <div className="chips" role="tablist" aria-label="Filter menu">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={`chip${filter === f.id ? " is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">Search the menu</span>
          <input
            type="search"
            placeholder="Search e.g. mojito, paneer, waffle…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <nav className="cat-jump" aria-label="Jump to category">
        {visible.map((c) => (
          <a key={c.id} href={`#${c.id}`}>
            {c.icon} {c.title}
          </a>
        ))}
      </nav>

      {visible.length === 0 ? (
        <p className="empty">No items match “{query}”. Try another search.</p>
      ) : (
        <div className="menu-list">
          {visible.map((c, i) => (
            <CategoryBlock key={c.id} cat={c} priority={i < 2} />
          ))}
        </div>
      )}
    </div>
  );
}
