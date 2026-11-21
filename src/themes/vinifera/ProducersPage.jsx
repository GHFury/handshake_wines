import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./theme.css";
import { THEME_C } from "../../images.js";
import CNavbar from "./Navbar.jsx";
import CFooter from "./Footer.jsx";

// ── PRODUCERS ─────────────────────────────────────────────────────
// Bios provided by Thomas. Edit the text here to refine wording.
const producers = [
  {
    id: 1, winery: "Zuidema Wine Co.", region: "Rutherford & Coombsville",
    bio: [
      "Winemaker Rudy Zuidema and partner Amy Zuidema cultivate some of the best Grenache you can find from the historic McGah Vineyard in Rutherford. Just a few barrels are produced each year and it never disappoints. I have yet to find a Grenache more memorable than this one in California. Superb. Rudy leads several key projects in Napa and especially in Coombsville where his talent as a winemaker is well known.",
    ],
  },
  {
    id: 2, winery: "Witching Stick Wines", region: "Anderson Valley",
    bio: [
      "If you are in the Anderson Valley, and you know where to look, you can find acclaimed winemaker Van Williamson and his wife Anne making some of the best wines around. Their single-vineyard Pinot Noirs caught our attention but all of the wines are very good. Van believes in minimal-intervention and is very selective when choosing oak barrels allowing the quality and character of the fruit to shine in every bottle.",
    ],
  },
  {
    id: 3, winery: "Shandel’s Oppenlander Vineyard", region: "Mendocino Coast",
    bio: [
      "Tucked just six miles from the Mendocino coastline, this remarkable vineyard has been cared for by the same family for eight generations, since the 1860s. Its Pinot Noir is fresh and vibrant, with notes of raspberry and rose petals. In this quiet corner of the region, there are more bears than people. When the grapes ripen, they come to feast and the vineyard manager must protect the crop. The wine is produced by the celebrated winemaker, Phil Baxter. The family is also known in the region for their world-class jams.",
    ],
  },
  {
    id: 4, winery: "Varozza Vineyards", region: "St. Helena AVA, Napa Valley",
    bio: [
      "Jack and his wife, Dianna Varozza, continue a family legacy that began in 1913, when his grandfather purchased the property. First bonded in 1885, the winery is among Napa Valley’s earliest. Located in the St. Helena AVA, all the grapes are grown on their beautiful estate. Even with famed neighbors close by, the wines stand out. The Cabernet Franc carries notes of unctuous blackberries, pomegranate, plums and dark chocolate. It has power and precision, wrapped in tannins as soft as velvet. Only a few barrels are produced each year, so I’m grateful for anything I can get.",
    ],
  },
];

export default function ProducersPage() {
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
      <section className="c-page-hero" style={{ height: "65vh", minHeight: "480px" }}>
        <img src={THEME_C.producersHero} className={`c-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Northern California Vineyard" />
        <div className="c-hero-overlay-light" />
        <div className="c-hero-content-light">
          <p className="c-hero-eyebrow-light">Straight from the Source</p>
          <h1 className="c-hero-h1-light">
            Our <em>Producers</em>
          </h1>
          <div className="c-hero-rule-light" />
        </div>
      </section>

      {/* INTRO */}
      <section className="r-pad" style={{ background: "var(--c-bg3)", padding: "7rem 4rem", borderBottom: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }} className="c-reveal" ref={r}>
          <p className="c-eyebrow">The Philosophy</p>
          <h2 className="c-h2">
            Good stories sell.<br />
            Customers want to support <em>good people.</em>
          </h2>
          <p className="c-p" style={{ maxWidth: "680px" }}>
            We partner exclusively with boutique, family-owned wineries in Northern California that produce
            under 2,000 cases annually. These aren't mass-market labels — they're small operations run by
            passionate people making wines that genuinely reflect their land.
          </p>
          <p className="c-p" style={{ maxWidth: "680px" }}>
            Thomas personally interviews each of our winery partners — sitting down with the owners to hear
            their origin story, their vision, and the philosophy behind their label. We publish those
            conversations here, so the retailers and restaurants we work with can connect with the real
            people behind every bottle they stock.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--c-rule)" }}>
            {[
              { stat: "2,000", label: "Max cases per winery" },
              { stat: "100%", label: "Family-owned producers" },
              { stat: "NorCal", label: "Northern California focus" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div style={{ fontFamily: "var(--c-font-serif)", fontSize: "2.5rem", fontWeight: 400, color: "var(--c-green)", lineHeight: 1, marginBottom: "0.3rem" }}>{stat}</div>
                <div style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--c-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER CARDS */}
      <section className="r-pad" style={{ background: "var(--c-bg)", padding: "8rem 4rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="c-reveal" ref={r} style={{ marginBottom: "4rem" }}>
            <p className="c-eyebrow">The Portfolio</p>
            <h2 className="c-h2">Featured <em>Winery Partners</em></h2>
            <p className="c-p" style={{ maxWidth: "540px" }}>
              Small, family-run producers from across Northern California, in Thomas’s own words.
            </p>
          </div>

          <div className="r-cols-1" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "var(--c-rule)", border: "1px solid var(--c-rule)" }}>
            {producers.map((p, i) => (
              <div key={p.id} className="c-reveal r-pad-inner" ref={r}
                style={{ background: i === 1 || i === 2 ? "var(--c-bg2)" : "var(--c-bg3)", padding: "3.5rem 3rem", display: "flex", flexDirection: "column" }}>
                <div>
                  <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.25em", color: "var(--c-green)", marginBottom: "1.25rem" }}>
                    {String(p.id).padStart(2, "0")}
                  </p>
                  <h3 style={{ fontFamily: "var(--c-font-serif)", fontSize: "1.9rem", fontWeight: 400, lineHeight: 1.25, color: "var(--c-dark)", marginBottom: "1rem" }}>
                    {p.winery}
                  </h3>
                  <div style={{ width: "36px", height: "1px", background: "var(--c-green)", marginBottom: "1.25rem" }} />
                  <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--c-green)", marginBottom: "1.25rem" }}>
                    {p.region}
                  </p>
                  {p.bio.map((t, k) => (
                    <p key={k} className="c-p" style={{ marginBottom: "0.9rem" }}>{t}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PITCH TO PRODUCERS */}
      <section className="r-pad" style={{ position: "relative", padding: "9rem 4rem", overflow: "hidden", textAlign: "center" }}>
        <div className="r-parallax" style={{ position: "absolute", inset: 0, backgroundImage: `url(${THEME_C.values})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,26,0.87)" }} />
        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }} className="c-reveal" ref={r}>
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8d4a0", marginBottom: "1.5rem" }}>
            For Producers
          </p>
          <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontStyle: "italic", color: "#faf7f2", lineHeight: 1.5, marginBottom: "1.5rem" }}>
            "We believe your story deserves to be heard — by the retailers and restaurants who will become your best advocates."
          </p>
          <div style={{ width: "48px", height: "1px", background: "#c8d4a0", margin: "0 auto 2.5rem" }} />
          <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.97rem", fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.85, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Are you a family-owned Northern California winery producing under 2,000 cases annually?
            We'd love to hear about your operation.
          </p>
          <Link to="/contact" style={{ display: "inline-block", padding: "0.9rem 2.5rem", background: "transparent", color: "#faf7f2", fontFamily: "var(--c-font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(200,212,160,0.5)", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.target.style.background = "#c8d4a0"; e.target.style.color = "#1a1a1a"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#faf7f2"; }}>
            Get In Touch
          </Link>
        </div>
      </section>

      <CFooter />
    </>
  );
}
