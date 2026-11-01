import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh" }}>
      <div className="container center">
        <p className="eyebrow">404</p>
        <h1>This page went for a chai break</h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">Go home</Link>
          <Link href="/menu" className="btn btn-ghost">See the menu</Link>
        </div>
      </div>
    </section>
  );
}
