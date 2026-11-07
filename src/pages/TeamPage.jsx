import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { THEME_A, TEAM } from "../images.js";

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

export default function TeamPageA() {
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
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero" style={{ height: "60vh", minHeight: "440px" }}>
        <img src={THEME_A.teamHero} className={`page-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Handshake Wines" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-eyebrow">Meet the Owner</p>
          <h1 className="page-h1">Thomas &amp; <em>Laura</em></h1>
          <div className="page-rule" />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--bg2)", padding: "6rem 4rem", borderBottom: "1px solid rgba(196,162,84,0.1)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }} className="reveal" ref={r}>
          <p className="section-eyebrow">Owner & Creative Partner</p>
          <h2 className="section-h2">Handshake was built by a wine expert<br />and a <em>creative force</em> who refused to settle.</h2>
          <p className="section-p" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            Thomas finds the wines. Laura tells their story. Together they've built a company where every bottle
            placed is backed by genuine expertise, real relationships, and a brand designed to stand out.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{ background: "var(--bg)", padding: "0" }}>
        {founders.map((person, i) => (
          <div key={person.name} className="reveal" ref={r}
            style={{
              display: "grid",
              gridTemplateColumns: person.primary ? "500px 1fr" : "1fr 380px",
              minHeight: person.primary ? "620px" : "460px",
              borderBottom: "1px solid rgba(196,162,84,0.1)",
            }}>

            {/* Photo */}
            <div style={{ order: person.primary ? 0 : 1, position: "relative", overflow: "hidden" }}>
              <img src={person.img} alt={person.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              <div style={{ position: "absolute", inset: 0,
                background: person.primary
                  ? "linear-gradient(to right, transparent 60%, var(--bg))"
                  : "linear-gradient(to left, transparent 60%, var(--bg2))" }} />
              {/* credential pill */}
              <div style={{
                position: "absolute", bottom: "2rem", left: "2rem",
                background: "rgba(11,9,6,0.85)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(196,162,84,0.4)",
                padding: "0.5rem 1.1rem",
                fontFamily: "var(--font-sans)", fontSize: "0.5rem", fontWeight: 500,
                letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)",
              }}>{person.credentials}</div>
              {person.primary && <>
                <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "44px", height: "44px",
                  borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "44px", height: "44px",
                  borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)", pointerEvents: "none" }} />
              </>}
            </div>

            {/* Copy */}
            <div style={{
              order: person.primary ? 1 : 0,
              padding: person.primary ? "5rem 5rem" : "3.5rem 4rem",
              display: "flex", flexDirection: "column", justifyContent: "center",
              background: person.primary ? "var(--bg)" : "var(--bg2)",
            }}>
              <h2 style={{ fontFamily: "var(--font-serif)",
                fontSize: person.primary ? "clamp(2rem, 3vw, 3rem)" : "clamp(1.5rem, 2.2vw, 2.2rem)",
                fontWeight: 300, color: "var(--white)", marginBottom: "0.4rem" }}>{person.name}</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 400,
                letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "2rem" }}>{person.title}</p>
              <div style={{ width: "40px", height: "1px", background: "rgba(196,162,84,0.35)", marginBottom: "2rem" }} />
              {person.bio.split("\n\n").map((para, pi) => (
                <p key={pi} style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", fontWeight: 300,
                  lineHeight: 1.95, color: "var(--muted)", marginBottom: pi === 0 ? "1.1rem" : 0 }}>{para}</p>
              ))}
              <div style={{ marginTop: "2.25rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {person.tags.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-sans)", fontSize: "0.5rem", fontWeight: 500,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)",
                    border: "1px solid rgba(196,162,84,0.28)", padding: "0.35rem 0.85rem" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg2)", padding: "7rem 4rem", textAlign: "center",
        borderTop: "1px solid rgba(196,162,84,0.12)" }} className="reveal" ref={r}>
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-h2" style={{ marginBottom: "1rem" }}>
          Ready to start a <em>conversation?</em>
        </h2>
        <p className="section-p" style={{ maxWidth: "460px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          Whether you're a producer looking for thoughtful placement or a retailer
          seeking wines with a story — Thomas and Laura would love to hear from you.
        </p>
        <Link to="/theme-a/contact" className="btn-outline">Contact Us</Link>
      </section>

      <Footer />
    </>
  );
}
