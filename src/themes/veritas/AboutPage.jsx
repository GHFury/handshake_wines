import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./theme.css";
import { THEME_B } from "../../images.js";

const steps = [
  { num: "01", title: "We Discover", body: "Through travel, tastings, and years of relationships in wine regions worldwide, we find producers whose wines are the truest expression of their place." },
  { num: "02", title: "We Vet the Fit", body: "Allocation size, price positioning, and brand story are evaluated to ensure the partnership works on both sides of the handshake." },
  { num: "03", title: "We Connect", body: "We match each producer with retailers who will champion their story — independent shops, fine dining, and boutique hospitality programs." },
  { num: "04", title: "We Sustain", body: "Education, storytelling, and ongoing curation keep the narrative alive long after the bottle leaves our hands." },
];

export default function VeritasAbout() {
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
          <NavLink to="/theme-b"     end className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Home</NavLink>
          <NavLink to="/theme-b/about"   className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>About</NavLink>
          <NavLink to="/theme-b/team"        className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Our Team</NavLink>
          <NavLink to="/theme-b/contact" className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Contact</NavLink>
        </div>
      </nav>

      {/* PAGE HERO */}
      <section className="b-page-hero" style={{ height: "65vh", minHeight: "480px" }}>
        <img src={THEME_B.aboutHero} className={`b-hero-img${imgLoaded ? " loaded" : ""}`} onLoad={() => setImgLoaded(true)} alt="About" />
        <div className="b-hero-overlay" />
        <div className="b-hero-content">
          <div className="b-hero-tag">Our Story</div>
          <h1 className="b-hero-h1">The Story Behind<br />Every <em>Handshake</em></h1>
          <div className="b-hero-rule" />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--b-bg2)", padding: "7rem 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "5rem", alignItems: "start" }} className="b-reveal" ref={r}>
          <div>
            <p style={{ fontFamily: "var(--b-font-serif)", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--b-blue)", lineHeight: 1, marginBottom: "0.4rem" }}>40+</p>
            <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--b-muted)", marginBottom: "2.5rem" }}>Years of Combined Expertise</p>
            <p style={{ fontFamily: "var(--b-font-serif)", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--b-blue)", lineHeight: 1, marginBottom: "0.4rem" }}>100%</p>
            <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--b-muted)" }}>Terroir-Driven Portfolio</p>
          </div>
          <div style={{ width: "1px", background: "linear-gradient(to bottom, transparent, rgba(122,173,207,0.35), transparent)", alignSelf: "stretch" }} />
          <div>
            <p style={{ fontFamily: "var(--b-font-serif)", fontSize: "1.45rem", fontStyle: "italic", color: "var(--b-white)", lineHeight: 1.55, marginBottom: "1.5rem" }}>
              "Exceptional wines deserve exceptional homes."
            </p>
            <p className="b-p">Handshake Wines was born from a simple idea and a real frustration: remarkable, terroir-driven wines were being overlooked by traditional distributors. We built a different model — rooted in relationships, storytelling, and belief that the right bottle in the right hands changes how people experience wine.</p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section style={{ background: "var(--b-bg)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={THEME_B.wineDramatic} alt="Origin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, var(--b-bg))" }} />
          </div>
          <div style={{ padding: "6rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }} className="b-reveal" ref={r}>
            <p className="b-eyebrow">Origin</p>
            <h2 className="b-h2">A Few Introductions<br />Between <em>Friends</em></h2>
            <p className="b-p">After years immersed in the wine world, we saw the gap. Small, terroir-driven wineries with extraordinary bottles had no path to the boutique retailers who would love them most.</p>
            <p className="b-p">What started as personal introductions grew into a curated network built entirely on trust and shared love for the craft. Our name says it all — every partnership begins with a handshake.</p>
            <Link to="/theme-b/contact" className="b-text-cta" style={{ marginTop: "1rem" }}>Work With Us →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "var(--b-bg2)", padding: "8rem 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="b-reveal" ref={r} style={{ marginBottom: "4rem" }}>
            <p className="b-eyebrow">The Process</p>
            <h2 className="b-h2">How We Work</h2>
          </div>
          {steps.map((s) => (
            <div key={s.num} className="b-reveal" ref={r}
              style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "2.5rem", padding: "2.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--b-font-serif)", fontSize: "2.75rem", fontWeight: 400, color: "rgba(122,173,207,0.2)", lineHeight: 1 }}>{s.num}</div>
              <div>
                <h3 style={{ fontFamily: "var(--b-font-serif)", fontSize: "1.4rem", color: "var(--b-white)", marginBottom: "0.65rem" }}>{s.title}</h3>
                <p className="b-p" style={{ marginBottom: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 4rem", textAlign: "center", background: "var(--b-bg)", borderTop: "1px solid rgba(122,173,207,0.1)" }} className="b-reveal" ref={r}>
        <p className="b-eyebrow">Work With Us</p>
        <h2 className="b-h2" style={{ marginBottom: "1rem" }}>Ready to Start a <em>Conversation?</em></h2>
        <p style={{ fontFamily: "var(--b-font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--b-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Whether you're a producer or a retailer — we'd love to hear your story.
        </p>
        <Link to="/theme-b/contact" className="b-btn">Get In Touch</Link>
      </section>

      {/* FOOTER */}
      <footer className="b-footer">
        <div className="b-footer-inner">
          <div className="b-footer-grid">
            <div><div className="b-f-logo">Handshake Wines</div><p className="b-f-tagline">Bottles with meaning,<br />worth discovering.</p></div>
            <div>
              <p className="b-f-col-title">Navigate</p>
              <ul className="b-f-links">
                <li><Link to="/theme-b">Home</Link></li>
                <li><Link to="/theme-b/about">About</Link></li>
                <li><Link to="/theme-b/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="b-f-col-title">Contact</p>
              <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)", lineHeight: 1.9 }}>
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
