import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./theme.css";
import { THEME_C } from "../../images.js";
import VideoHero from "../../components/VideoHero.jsx";
import CNavbar from "./Navbar.jsx";
import CFooter from "./Footer.jsx";

export default function ViniferaHome() {
  const revealRefs = useRef([]);
  useEffect(() => { window.scrollTo(0, 0); }, []);
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
      <CNavbar />

      {/* ── HERO ── */}
      <VideoHero
        src="/videos/harvest.mp4"
        poster="/images/harvest-poster.jpg"
        overlay="linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 18%), linear-gradient(to top, rgba(245,240,232,0.92) 0%, rgba(245,240,232,0.35) 45%, rgba(245,240,232,0.0) 100%)"
        height="100vh"
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "0 4rem 5rem", maxWidth: "760px" }}>
          <p className="c-hero-eyebrow-light">Handshake Wines</p>
          <h1 className="c-hero-h1-light">
            Bottles with <em>Meaning,</em><br />Worth Discovering
          </h1>
          <div className="c-hero-rule-light" />
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "1.02rem", fontWeight: 300, color: "var(--c-mid)", lineHeight: 1.85, marginTop: "1.5rem", marginBottom: "2.5rem", maxWidth: "520px" }}>
            Partnering with boutique family-owned wineries that produce under 2,000 cases annually —
            placing their wines in the hands of retailers and restaurants who understand the story.
          </p>
          <Link to="/about" className="c-btn">Discover Our Story</Link>
          <span style={{ display: "inline-block", width: "1.5rem" }} />
          <Link to="/contact" className="c-btn-outline">Work With Us</Link>
        </div>
      </VideoHero>

      {/* ── INTRO STRIP ── */}
      <div style={{ background: "var(--c-bg2)", borderTop: "1px solid var(--c-rule)", borderBottom: "1px solid var(--c-rule)", padding: "2.75rem 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          {[
            "Boutique Family-Owned Wineries",
            "Under 2,000 Cases Annually",
            "Northern California Focus",
            "Retailers & Restaurants"
          ].map((tag) => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: "5px", height: "5px", background: "var(--c-green)", transform: "rotate(45deg)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-mid)" }}>{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: "var(--c-bg3)", padding: "9rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center" }}>
          <div className="c-reveal" ref={r} style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "-1.5rem", left: "-1.5rem", width: "70px", height: "70px", borderTop: "1px solid var(--c-green)", borderLeft: "1px solid var(--c-green)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "70px", height: "70px", borderBottom: "1px solid var(--c-green)", borderRight: "1px solid var(--c-green)", pointerEvents: "none" }} />
            <img src={THEME_C.tasting} alt="Wine tasting" style={{ width: "100%", height: "580px", objectFit: "cover", display: "block" }} />
          </div>
          <div className="c-reveal" ref={r}>
            <p className="c-eyebrow">Who We Are</p>
            <h2 className="c-h2">Every Partnership<br />Begins with a <em>Handshake</em></h2>
            <p className="c-p">
              Handshake Wines partners with boutique, family-owned wineries in Northern California
              that produce under 2,000 cases annually — the passionate small producers whose wines
              are inseparable from the land and the people who tend it.
            </p>
            <p className="c-p">
              We bridge the gap between these hidden-gem producers and the retailers and restaurants
              who crave wines with soul, intention, and a genuine sense of place.
            </p>
            <div style={{ width: "40px", height: "1px", background: "var(--c-rule)", margin: "1.75rem 0" }} />
            <Link to="/about" className="c-text-cta">Learn Our Story →</Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCERS TEASER ── */}
      <section style={{ background: "var(--c-bg2)", padding: "8rem 4rem", borderTop: "1px solid var(--c-rule)", borderBottom: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }} className="c-reveal" ref={r}>
          <p className="c-eyebrow">Straight from the Source</p>
          <h2 className="c-h2" style={{ maxWidth: "600px", margin: "0 auto 1rem" }}>
            The Story Behind<br />Every <em>Bottle</em>
          </h2>
          <p className="c-p" style={{ maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Great wines start with great people. We go directly to the winery owners of Northern California
            to hear their vision, their craft, and the story behind their brand — because good stories sell,
            and customers want to support good people.
          </p>
          <Link to="/producers" className="c-btn">Meet Our Producers</Link>
        </div>
      </section>

      {/* ── STORY QUOTE ── */}
      <section style={{ position: "relative", padding: "10rem 4rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${THEME_C.estate})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,26,0.85)" }} />
        <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto", textAlign: "center" }} className="c-reveal" ref={r}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "55px", height: "1px", background: "rgba(200,212,160,0.4)" }} />
            <div style={{ width: "7px", height: "7px", background: "#c8d4a0", transform: "rotate(45deg)" }} />
            <div style={{ width: "55px", height: "1px", background: "rgba(200,212,160,0.4)" }} />
          </div>
          <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontStyle: "italic", color: "#faf7f2", lineHeight: 1.55, marginBottom: "1.5rem" }}>
            "What began as personal introductions between friends and winemakers has grown into a curated network built on trust, transparency, and a shared love for the craft."
          </p>
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8d4a0", marginBottom: "2.75rem" }}>— Thomas Bebbington, Founder</p>
          <Link to="/about" style={{ display: "inline-block", padding: "0.9rem 2.5rem", background: "transparent", color: "#faf7f2", fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(200,212,160,0.5)", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.target.style.background = "#c8d4a0"; e.target.style.color = "#1a1a1a"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#faf7f2"; }}>
            Read Our Full Story
          </Link>
        </div>
      </section>

      <CFooter />
    </>
  );
}
