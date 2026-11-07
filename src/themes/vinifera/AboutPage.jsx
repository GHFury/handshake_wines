import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./theme.css";
import { THEME_C } from "../../images.js";
import CNavbar from "./Navbar.jsx";
import CFooter from "./Footer.jsx";

const pillars = [
  { n: "01", title: "Terroir First",  body: "We partner exclusively with producers whose wines are inseparable from the land — soils, elevation, microclimate, and the farming philosophy behind the label." },
  { n: "02", title: "Built on Trust", body: "Every relationship begins with transparency. We advocate for wines we believe in, with retailers and restaurants who share our curiosity and standards." },
  { n: "03", title: "The Right Home", body: "Exceptional wines deserve exceptional placements — boutique shops and restaurant programs with educated teams who ask the right questions." },
];

const steps = [
  { n: "01", title: "We Discover the Producer",     body: "Through travel, tastings, and relationships built over years in Northern California, we identify family-owned producers whose wines are the truest expression of their place." },
  { n: "02", title: "We Vet the Fit",               body: "Under 2,000 cases annually. Family-owned. Northern California focused. Allocation size, price point, and brand story are evaluated to ensure the partnership makes sense on both sides." },
  { n: "03", title: "We Connect with Retailers & Restaurants", body: "Our curated network of independent shops and restaurant programs champions the story behind every bottle — putting the right wines in front of the right people." },
  { n: "04", title: "We Tell Their Story",          body: "Thomas personally interviews each winery partner — capturing their vision and origin story so that every retailer and restaurant we work with understands who made their wine and why." },
];

export default function ViniferaAbout() {
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

      <section className="c-page-hero" style={{ height: "68vh", minHeight: "480px" }}>
        <img src={THEME_C.aboutHero} className={`c-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Northern California vineyard" />
        <div className="c-hero-overlay-light" />
        <div className="c-hero-content-light">
          <p className="c-hero-eyebrow-light">Specialty Wine Distributor</p>
          <h1 className="c-hero-h1-light">The Story Behind<br />Every <em>Handshake</em></h1>
          <div className="c-hero-rule-light" />
        </div>
      </section>

      {/* WHAT WE ARE — prominent statement */}
      <section style={{ background: "var(--c-green)", padding: "6rem 4rem", textAlign: "center" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }} className="c-reveal" ref={r}>
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8d4a0", marginBottom: "1.25rem" }}>What We Are</p>
          <h2 style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.2, color: "#faf7f2", marginBottom: "1.75rem" }}>
            Handshake Wines is a<br /><em>Specialty Wine Distributor</em>
          </h2>
          <div style={{ width: "48px", height: "1px", background: "#c8d4a0", margin: "0 auto 1.75rem" }} />
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(250,247,242,0.8)", maxWidth: "640px", margin: "0 auto" }}>
            We partner with boutique, family-owned Northern California wineries producing under 2,000 cases
            annually, and place their wines with the retailers and restaurants who will champion them.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--c-bg3)", padding: "8rem 4rem", borderBottom: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "0", alignItems: "start" }} className="c-reveal" ref={r}>
          <div>
            <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--c-green)", lineHeight: 1, marginBottom: "0.35rem" }}>2,000</p>
            <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--c-muted)", marginBottom: "2.75rem" }}>Max Cases Per Winery</p>
            <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 400, color: "var(--c-green)", lineHeight: 1, marginBottom: "0.35rem" }}>NorCal</p>
            <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--c-muted)" }}>Northern California Focus</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "1px", height: "100%", background: "var(--c-rule)" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--c-dark)", lineHeight: 1.55, marginBottom: "1.5rem" }}>
              "Exceptional wines deserve exceptional homes."
            </p>
            <p className="c-p">
              Handshake Wines was built on a simple frustration: remarkable, terroir-driven wines from
              Northern California's family-owned small producers had no path to the boutique retailers
              and restaurants who would love them most. We built something different — a model rooted
              in relationships, storytelling, and the belief that the right bottle in the right hands
              changes how people experience wine.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section style={{ background: "var(--c-bg2)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "580px" }}>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <img src={THEME_C.grapes} alt="Northern California grapes" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, var(--c-bg2))" }} />
          </div>
          <div style={{ padding: "6rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }} className="c-reveal" ref={r}>
            <p className="c-eyebrow">Origin</p>
            <h2 className="c-h2">A Focus on<br />Northern <em>California</em></h2>
            <p className="c-p">
              Northern California's wine country is home to some of the world's most compelling terroirs —
              and some of its most overlooked small producers. Family operations with a few hundred acres,
              generations of farming knowledge, and a fierce commitment to craft are producing wines that
              rival anything on the market at a fraction of the name recognition.
            </p>
            <p className="c-p">
              Handshake was built to change that. We work exclusively with family-owned Northern California
              producers under 2,000 cases annually, placing their wines with retailers and restaurants that
              understand and celebrate what makes them special.
            </p>
            <div style={{ width: "40px", height: "1px", background: "var(--c-rule)", margin: "1.5rem 0" }} />
            <Link to="/producers" className="c-text-cta">Meet Our Producers →</Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "var(--c-bg3)", padding: "9rem 4rem", borderTop: "1px solid var(--c-rule)", borderBottom: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="c-reveal" ref={r} style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p className="c-eyebrow">What We Believe</p>
            <h2 className="c-h2" style={{ maxWidth: "480px", margin: "0 auto 1rem" }}>Three Principles Guide Everything We Do</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "var(--c-rule)" }}>
            {pillars.map((p) => (
              <div key={p.n} className="c-reveal" ref={r}
                style={{ background: "var(--c-bg3)", padding: "3rem 2.5rem", transition: "background 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--c-bg2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--c-bg3)"}>
                <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.25em", color: "var(--c-green)", marginBottom: "1rem" }}>{p.n}</p>
                <h3 style={{ fontFamily: "var(--c-font-serif)", fontSize: "1.35rem", color: "var(--c-dark)", marginBottom: "0.85rem" }}>{p.title}</h3>
                <p className="c-p" style={{ marginBottom: 0, fontSize: "0.96rem" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ position: "relative", padding: "9rem 4rem", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${THEME_C.values})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,26,0.87)" }} />
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }} className="c-reveal" ref={r}>
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8d4a0", marginBottom: "2rem" }}>Our Mission</p>
          <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontStyle: "italic", color: "#faf7f2", lineHeight: 1.5, marginBottom: "1.75rem" }}>
            "We partner with boutique, family-owned Northern California wineries producing under 2,000 cases annually — placing their wines with the retailers and restaurants that understand and celebrate what makes them extraordinary."
          </p>
          <div style={{ width: "48px", height: "1px", background: "#c8d4a0", margin: "0 auto" }} />
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "var(--c-bg3)", padding: "8rem 4rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="c-reveal" ref={r} style={{ marginBottom: "4rem" }}>
            <p className="c-eyebrow">The Process</p>
            <h2 className="c-h2">How We Work</h2>
          </div>
          {steps.map((s) => (
            <div key={s.n} className="c-reveal" ref={r}
              style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "2.5rem", padding: "2.75rem 0", borderBottom: "1px solid var(--c-rule)" }}>
              <div style={{ fontFamily: "var(--c-font-serif)", fontSize: "2rem", fontWeight: 400, color: "rgba(45,90,39,0.25)", lineHeight: 1, paddingTop: "0.25rem" }}>{s.n}</div>
              <div>
                <h3 style={{ fontFamily: "var(--c-font-serif)", fontSize: "1.35rem", color: "var(--c-dark)", marginBottom: "0.65rem" }}>{s.title}</h3>
                <p className="c-p" style={{ marginBottom: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--c-bg2)", padding: "7rem 4rem", textAlign: "center", borderTop: "1px solid var(--c-rule)" }} className="c-reveal" ref={r}>
        <p className="c-eyebrow">Work With Us</p>
        <h2 className="c-h2" style={{ marginBottom: "1rem" }}>Ready to Start a <em>Conversation?</em></h2>
        <p className="c-p" style={{ marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
          Whether you're a producer or a retailer or restaurant — we'd love to hear your story.
        </p>
        <Link to="/contact" className="c-btn">Get In Touch</Link>
      </section>

      <CFooter />
    </>
  );
}
