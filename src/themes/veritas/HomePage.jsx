import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./theme.css";
import { THEME_B, VIDEOS } from "../../images.js";
import VideoHero from "../../components/VideoHero.jsx";

export default function VeritasHome() {
  const [scrolled, setScrolled] = useState(false);
  const [nlEmail, setNlEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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

  const handleNl = (e) => { e.preventDefault(); if (nlEmail.trim()) setSubscribed(true); };

  const features = [
    { num: "01", label: "Terroir-Driven", body: "Every producer in our portfolio is selected for the authenticity of their expression — wines inseparable from the land that made them." },
    { num: "02", label: "Boutique Placement", body: "We place wines with independent retailers, fine dining programs, and hospitality buyers who understand and celebrate the story." },
    { num: "03", label: "Relationship Built", body: "Every bottle we move carries the weight of a real relationship — with the producer, the retailer, and the wine itself." },
  ];

  return (
    <>
      {/* ── NAVBAR ── */}
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

      {/* ── HERO ── */}
      <VideoHero
        videoId={VIDEOS.themeB}
        poster={THEME_B.hero}
        overlay="linear-gradient(to top, rgba(8,12,18,0.97) 0%, rgba(8,12,18,0.45) 55%, rgba(8,12,18,0.15) 100%)"
        height="100vh"
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 4rem 5rem" }}>
          <div className="b-hero-content" style={{ maxWidth: "860px" }}>
            <div className="b-hero-tag">Handshake Wines</div>
            <h1 className="b-hero-h1">
              Curating Wines<br />Worth <em>Discovering</em>
            </h1>
            <div className="b-hero-rule" />
            <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(200,212,220,0.6)", lineHeight: 1.85, marginTop: "1.25rem", marginBottom: "2.5rem", maxWidth: "520px" }}>
              Terroir-driven wines. Boutique placements. Built entirely on relationships.
            </p>
            <Link to="/theme-b/about" className="b-btn">Discover Our Portfolio</Link>
          </div>
        </div>
      </VideoHero>

      {/* ── TICKER BAND ── */}
      <div style={{ background: "var(--b-blue)", padding: "0.9rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap", padding: "0 2rem" }}>
          {["Terroir-Driven Selection", "Boutique Distributors", "Trust-Based Partnerships", "Story in Every Bottle", "Curated, Not Mass-Distributed"].map((t) => (
            <span key={t} style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--b-bg)", whiteSpace: "nowrap" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: "var(--b-bg2)", padding: "8rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div className="b-reveal" ref={r}>
            <p className="b-eyebrow">Who We Are</p>
            <h2 className="b-h2">Every Partnership Begins<br />with a <em>Handshake</em></h2>
            <p className="b-p">Handshake Wines bridges the gap between small, terroir-driven wineries and boutique retailers who crave unique, story-rich bottles. We are the curators between craft and commerce.</p>
            <p className="b-p">What started as personal introductions between friends and winemakers grew into a curated distribution network built entirely on trust, shared values, and a love for the craft.</p>
            <Link to="/theme-b/about" className="b-text-cta">Our Story →</Link>
          </div>
          <div className="b-reveal" ref={r} style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "-1rem", left: "-1rem", width: "60px", height: "60px", borderTop: "2px solid var(--b-blue)", borderLeft: "2px solid var(--b-blue)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-1rem", right: "-1rem", width: "60px", height: "60px", borderBottom: "2px solid var(--b-blue)", borderRight: "2px solid var(--b-blue)", zIndex: 1, pointerEvents: "none" }} />
            <img src={THEME_B.storyImg} alt="Winemaker" style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ background: "var(--b-bg)", padding: "8rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="b-reveal" ref={r} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="b-eyebrow">The Handshake Difference</p>
            <h2 className="b-h2" style={{ maxWidth: "600px", margin: "0 auto" }}>How We Work</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(122,173,207,0.1)", border: "1px solid rgba(122,173,207,0.1)" }}>
            {features.map((f) => (
              <div key={f.num} className="b-reveal" ref={r} style={{ padding: "3rem 2.5rem", background: "var(--b-bg)", transition: "background 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(122,173,207,0.04)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--b-bg)"}
              >
                <div style={{ fontFamily: "var(--b-font-serif)", fontSize: "3rem", fontWeight: 400, color: "rgba(122,173,207,0.2)", lineHeight: 1, marginBottom: "1.25rem" }}>{f.num}</div>
                <h3 style={{ fontFamily: "var(--b-font-serif)", fontSize: "1.35rem", fontWeight: 400, color: "var(--b-white)", marginBottom: "0.85rem" }}>{f.label}</h3>
                <p className="b-p" style={{ marginBottom: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE ── */}
      <section style={{ position: "relative", padding: "9rem 4rem", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${THEME_B.portfolioBg})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,12,18,0.9)" }} />
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }} className="b-reveal" ref={r}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "50px", height: "1px", background: "rgba(122,173,207,0.4)" }} />
            <div style={{ width: "7px", height: "7px", background: "var(--b-blue)", transform: "rotate(45deg)" }} />
            <div style={{ width: "50px", height: "1px", background: "rgba(122,173,207,0.4)" }} />
          </div>
          <p style={{ fontFamily: "var(--b-font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontStyle: "italic", fontWeight: 400, color: "var(--b-white)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
            "We curate rare, high-value wines and deliver them into the hands of boutique retailers who understand the story in every bottle."
          </p>
          <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--b-blue)", marginBottom: "2.5rem" }}>— Handshake Wines</p>
          <Link to="/theme-b/about" className="b-btn">Our Mission</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="b-footer">
        <div className="b-footer-inner">
          <div className="b-footer-grid">
            <div>
              <div className="b-f-logo">Handshake Wines</div>
              <p className="b-f-tagline">Bottles with meaning,<br />worth discovering.</p>
            </div>
            <div>
              <p className="b-f-col-title">Navigate</p>
              <ul className="b-f-links">
                <li><Link to="/theme-b">Home</Link></li>
                <li><Link to="/theme-b/about">About</Link></li>
                <li><Link to="/theme-b/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="b-f-col-title">Stay Connected</p>
              <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                New producers, rare allocations, upcoming events.
              </p>
              {!subscribed ? (
                <form className="b-nl-form" onSubmit={handleNl}>
                  <input type="email" className="b-nl-input" placeholder="Your email" value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} />
                  <button type="submit" className="b-nl-btn">Join</button>
                </form>
              ) : <p className="b-nl-thanks">Thank you.</p>}
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
