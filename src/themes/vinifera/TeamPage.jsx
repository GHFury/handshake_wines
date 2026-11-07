import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./theme.css";
import { THEME_C } from "../../images.js";
import CNavbar from "./Navbar.jsx";
import CFooter from "./Footer.jsx";

export default function ViniferaTeam() {
  const [imgLoaded, setImgLoaded] = useState(false);
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

      {/* PAGE HERO */}
      <section className="c-page-hero" style={{ height: "58vh", minHeight: "420px" }}>
        <img src={THEME_C.teamHero} className={`c-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Handshake Wines" />
        <div className="c-hero-overlay-dark" />
        <div className="c-hero-content-dark">
          <p className="c-hero-eyebrow-dark">The Person Behind the Pour</p>
          <h1 className="c-hero-h1-dark">Meet the <em>Founder</em></h1>
          <div className="c-hero-rule-dark" />
        </div>
      </section>

      {/* THOMAS — full-width feature profile */}
      <section style={{ background: "var(--c-bg3)", padding: "0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "480px 1fr", minHeight: "620px" }} className="c-reveal" ref={r}>

          {/* Photo */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src="/images/thomas.jpg" alt="Thomas Bebbington"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 80%, var(--c-bg3))" }} />
            {/* Corner accents */}
            <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "50px", height: "50px", borderTop: "1px solid var(--c-green)", borderLeft: "1px solid var(--c-green)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "50px", height: "50px", borderBottom: "1px solid var(--c-green)", borderRight: "1px solid var(--c-green)", pointerEvents: "none" }} />
          </div>

          {/* Copy */}
          <div style={{ padding: "5rem 5.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(2.2rem, 3vw, 3.2rem)", fontWeight: 400, color: "var(--c-dark)", marginBottom: "0.4rem" }}>
              Thomas Bebbington
            </h2>
            <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--c-green)", marginBottom: "2rem" }}>
              Founder & Owner — Handshake Wines
            </p>
            <div style={{ width: "44px", height: "1px", background: "var(--c-rule)", marginBottom: "2rem" }} />
            <p className="c-p" style={{ marginBottom: "1rem" }}>
              Thomas founded Handshake Wines on a straightforward conviction: the best bottles never come from
              the biggest distributors. After years working directly with small producers across Northern California,
              he built Handshake as a home for wines that earn their shelf space through quality and story —
              not marketing budgets.
            </p>
            <p className="c-p" style={{ marginBottom: "1rem" }}>
              As the company's lead wine buyer, Thomas travels regularly to meet producers in person, taste at the source,
              and personally evaluate whether a wine genuinely deserves the retailers and restaurants he works with.
              He partners exclusively with boutique, family-owned wineries that produce under 2,000 cases annually —
              real craft without compromise.
            </p>
            <p className="c-p" style={{ marginBottom: "2.25rem" }}>
              His latest initiative: interviewing each of his winery partners directly — capturing their vision, their
              origin story, and the philosophy behind their label. Because good stories sell, and customers want to
              support good people.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Northern California", "Boutique Producers", "Wine Procurement", "Under 2,000 Cases"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c-green)", border: "1px solid rgba(45,90,39,0.25)", padding: "0.35rem 0.9rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section style={{ background: "var(--c-bg2)", padding: "8rem 4rem", borderTop: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }} className="c-reveal" ref={r}>
          <p className="c-eyebrow">The Philosophy</p>
          <h2 className="c-h2">"Real craft<br />without <em>compromise.</em>"</h2>
          <p className="c-p" style={{ maxWidth: "640px", margin: "0 auto 1rem" }}>
            Every producer in the Handshake portfolio is a family-owned operation with under 2,000 cases
            of annual production. These are Northern California's hidden gems — wines that tell the story
            of a specific hillside, a specific season, a specific family's decision about how to farm.
          </p>
          <p className="c-p" style={{ maxWidth: "640px", margin: "0 auto 2.5rem" }}>
            Thomas doesn't place wines he doesn't personally believe in. Every bottle in the Handshake
            portfolio has been tasted at the source and carries his endorsement.
          </p>
          <Link to="/producers" className="c-btn">Meet Our Producers</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--c-bg3)", padding: "6rem 4rem", textAlign: "center", borderTop: "1px solid var(--c-rule)" }} className="c-reveal" ref={r}>
        <p className="c-eyebrow">Get In Touch</p>
        <h2 className="c-h2" style={{ marginBottom: "1rem" }}>Ready to Start a <em>Conversation?</em></h2>
        <p className="c-p" style={{ maxWidth: "440px", margin: "0 auto 2.5rem" }}>
          Whether you're a producer looking for thoughtful placement or a retailer or restaurant seeking wines with a genuine story.
        </p>
        <Link to="/contact" className="c-btn">Contact Thomas</Link>
      </section>

      <CFooter />
    </>
  );
}
