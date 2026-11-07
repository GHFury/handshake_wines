import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./theme.css";
import { THEME_B, TEAM } from "../../images.js";

const founders = [
  {
    name: "Thomas Bebbington",
    title: "Owner & Head of Wine Selection",
    credentials: "Certified Wine Taster",
    img: TEAM.thomas,
    bio: "Thomas founded Handshake Wines on a straightforward conviction: the best bottles never come from the biggest distributors. After years working directly with small producers across Europe and the Americas, he built Handshake as a home for wines that earn their shelf space through quality and story — not marketing budgets.",
    bio2: "As the company\'s lead wine buyer, Thomas travels regularly to meet producers in person, taste at the source, and personally evaluate whether a wine deserves the retailers he works with. Every bottle in the Handshake portfolio carries his endorsement.",
    tags: ["Wine Procurement", "Producer Relationships", "Portfolio Strategy"],
    primary: true,
  },
  {
    name: "Laura Nathan",
    title: "Creative Partner",
    credentials: "Brand & Visual Identity",
    img: TEAM.laura,
    bio: "Laura is the creative force behind the Handshake brand — including the original handshakewines.com. She shaped the company\'s visual identity, name, and the philosophy that a wine business should feel as considered as the wines it sells.",
    bio2: "With a background in brand strategy and digital design, Laura ensures that everything Handshake puts into the world reflects the care that goes into every bottle Thomas selects.",
    tags: ["Brand Identity", "Digital Design", "Creative Direction"],
    primary: false,
  },
];

export default function TeamPageB() {
  const [scrolled, setScrolled]   = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <>
      <nav className={`b-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="b-nav-left">
          <Link to="/theme-b" className="b-logo-text">Handshake Wines</Link>
          <div className="b-logo-rule" />
          <span className="b-logo-tag">Portfolio</span>
        </div>
        <div className="b-nav-right">
          <NavLink to="/theme-b"         end className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Home</NavLink>
          <NavLink to="/theme-b/about"       className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>About</NavLink>
          <NavLink to="/theme-b/team"        className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Our Team</NavLink>
          <NavLink to="/theme-b/contact"     className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Contact</NavLink>
        </div>
      </nav>

      {/* HERO */}
      <section className="b-page-hero" style={{ height: "58vh", minHeight: "420px" }}>
        <img src={THEME_B.teamHero} className={`b-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Handshake Wines founders" />
        <div className="b-hero-overlay" />
        <div className="b-hero-content">
          <div className="b-hero-tag">Meet the Owner</div>
          <h1 className="b-hero-h1">Thomas &amp; <em>Laura</em></h1>
          <div className="b-hero-rule" />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--b-bg2)", padding: "6rem 4rem", borderBottom: "1px solid rgba(122,173,207,0.1)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }} className="b-reveal" ref={r}>
          <p className="b-eyebrow">Owner & Creative Partner</p>
          <h2 className="b-h2">Thomas finds the wines.<br />Laura makes the world <em>notice them.</em></h2>
          <p className="b-p" style={{ textAlign: "center", maxWidth: "540px", margin: "0 auto" }}>
            Handshake was built by a wine expert and a creative force who refused to settle for ordinary.
            Every bottle placed is backed by genuine expertise — and a brand designed to stand out.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{ background: "var(--b-bg)", padding: "0" }}>
        {founders.map((person, i) => (
          <div key={person.name} className="b-reveal" ref={r}
            style={{
              display: "grid",
              gridTemplateColumns: person.primary ? "440px 1fr" : "1fr 440px",
              minHeight: person.primary ? "560px" : "420px",
              borderBottom: "1px solid rgba(122,173,207,0.08)",
              background: person.primary ? "var(--b-bg)" : "var(--b-bg2)",
            }}>

            {/* Photo */}
            <div style={{ order: person.primary ? 0 : 1, position: "relative", overflow: "hidden" }}>
              <img src={person.img} alt={person.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center",
                  filter: "grayscale(8%) contrast(1.05)" }} />
              <div style={{ position: "absolute", inset: 0,
                background: i % 2 === 0
                  ? "linear-gradient(to right, transparent 60%, var(--b-bg))"
                  : "linear-gradient(to left, transparent 60%, var(--b-bg2))" }} />
              <div style={{
                position: "absolute", top: "1.5rem", left: "1.5rem",
                background: "var(--b-blue)", padding: "0.4rem 1rem",
                fontFamily: "var(--b-font-sans)", fontSize: "0.48rem", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--b-bg)",
              }}>{person.credentials}</div>
            </div>

            {/* Copy */}
            <div style={{ order: person.primary ? 1 : 0, padding: "5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontFamily: "var(--b-font-serif)", fontSize: "clamp(1.9rem, 2.8vw, 2.75rem)",
                fontWeight: 400, color: "var(--b-white)", marginBottom: "0.4rem" }}>{person.name}</h2>
              <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.58rem", fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--b-blue)",
                marginBottom: "2rem" }}>{person.title}</p>
              <div style={{ width: "32px", height: "2px", background: "var(--b-blue)", marginBottom: "2rem" }} />
              <p className="b-p" style={{ marginBottom: "0.9rem" }}>{person.bio}</p>
              <p className="b-p" style={{ marginBottom: "2rem" }}>{person.bio2}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {person.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--b-font-sans)", fontSize: "0.5rem", fontWeight: 600,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--b-blue)",
                    border: "1px solid rgba(122,173,207,0.28)", padding: "0.35rem 0.8rem",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 4rem", textAlign: "center", background: "var(--b-bg2)",
        borderTop: "1px solid rgba(122,173,207,0.1)" }} className="b-reveal" ref={r}>
        <p className="b-eyebrow">Get In Touch</p>
        <h2 className="b-h2" style={{ marginBottom: "1rem" }}>Ready to start a <em>conversation?</em></h2>
        <p className="b-p" style={{ maxWidth: "460px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          Thomas and Laura would love to hear from you — whether you're a producer, a retailer, or just a wine lover.
        </p>
        <Link to="/theme-b/contact" className="b-btn">Contact Us</Link>
      </section>

      <footer className="b-footer">
        <div className="b-footer-inner">
          <div className="b-footer-grid">
            <div><div className="b-f-logo">Handshake Wines</div><p className="b-f-tagline">Bottles with meaning,<br />worth discovering.</p></div>
            <div>
              <p className="b-f-col-title">Navigate</p>
              <ul className="b-f-links">
                <li><Link to="/theme-b">Home</Link></li>
                <li><Link to="/theme-b/about">About</Link></li>
                <li><Link to="/theme-b/team">Our Team</Link></li>
                <li><Link to="/theme-b/contact">Contact</Link></li>
              </ul>
            </div>
            <div><p className="b-f-col-title">Contact</p>
              <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)" }}>
                <a href="mailto:hello@handshakewines.com" style={{ color: "var(--b-blue-lt)", textDecoration: "none" }}>hello@handshakewines.com</a>
              </p>
            </div>
          </div>
          <div className="b-footer-bottom">
            <p className="b-f-copy">© 2025 Handshake Wines, LLC. All rights reserved.</p>
            <p className="b-f-email"><a href="mailto:hello@handshakewines.com">hello@handshakewines.com</a></p>
          </div>
        </div>
      </footer>
      <Link to="/" className="b-back">← All Themes</Link>
    </>
  );
}
