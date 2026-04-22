import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./AboutPage.module.css";

const pillars = [
  {
    num: "01",
    title: <><em>Terroir</em> First</>,
    body: "We partner exclusively with producers whose wines are inseparable from the land that made them — soils, elevation, microclimate, and the philosophy of the family behind the label.",
  },
  {
    num: "02",
    title: <>Built on <em>Trust</em></>,
    body: "Every relationship we cultivate begins with transparency. We don't just move product — we advocate for wines we believe in, with retailers who share our standards and curiosity.",
  },
  {
    num: "03",
    title: <>The Right <em>Home</em></>,
    body: "We believe exceptional wines deserve exceptional placements. That means boutique retailers with educated teams, clientele who ask questions, and shelves curated with intention.",
  },
];

const steps = [
  {
    num: "01",
    title: <>We <em>Discover</em> the Producer</>,
    body: "Through travel, tastings, and years of relationships built in wine regions around the world, we identify producers whose wines represent the truest expression of their place.",
  },
  {
    num: "02",
    title: <>We <em>Vet</em> the Fit</>,
    body: "Not every great wine is right for every market. We evaluate allocation size, price positioning, and brand story to ensure the partnership makes sense on both sides of the handshake.",
  },
  {
    num: "03",
    title: <>We <em>Connect</em> with Retailers</>,
    body: "We work with a curated network of independent shops, boutique hotel programs, and fine dining accounts who understand and celebrate the story behind every bottle we bring them.",
  },
  {
    num: "04",
    title: <>We <em>Sustain</em> the Relationship</>,
    body: "Our work doesn't end at the first sale. We support our retail partners with education, storytelling, and ongoing curation — keeping the narrative alive long after the bottle leaves our hands.",
  },
];

export default function AboutPage() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const r = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className={styles.pageHero}>
        <img
          src="https://images.unsplash.com/photo-1566903451935-7e8714f38f12?auto=format&fit=crop&w=1920&q=80"
          className={`page-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)}
          alt="Wine estate vineyard"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Story</p>
          <h1 className="page-h1">The Story Behind<br />Every <em>Handshake</em></h1>
          <div className="page-rule" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className={styles.sectionIntro}>
        <div className={`${styles.introGrid} reveal`} ref={r}>
          <div>
            <div className={styles.introStat}>100%</div>
            <p className={styles.introStatLabel}>Terroir-Driven</p>
            <div className={styles.introStat} style={{ marginTop: "2.5rem" }}>Curated</div>
            <p className={styles.introStatLabel}>Not Mass-Distributed</p>
          </div>
          <div className={styles.introDivider} />
          <div>
            <p className={styles.introQuote}>"Exceptional wines deserve exceptional homes."</p>
            <p className="section-p">
              Handshake Wines was born from a simple idea and a deep frustration: remarkable,
              terroir-driven wines were being overlooked by traditional distributors — not because
              they lacked quality, but because they lacked volume. We built something different.
              A model rooted in relationships, storytelling, and the belief that the right bottle
              in the right hands changes how people think about wine.
            </p>
          </div>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section className={styles.sectionOrigin}>
        <div className={styles.originGrid}>
          <div className={styles.originImgCol}>
            <img
              src="https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&w=900&q=80"
              className={styles.originImg}
              alt="Winery barrels"
            />
            <div className={styles.originImgOverlay} />
          </div>
          <div className={`${styles.originCopy} reveal`} ref={r}>
            <p className="section-eyebrow">Origin</p>
            <h2 className="section-h2">A Few Introductions<br />Between <em>Friends</em></h2>
            <p className="section-p">
              After years immersed in the wine world — tasting, traveling, and building
              relationships with passionate producers — we saw a gap between small, terroir-driven
              wineries and the boutique retailers who craved unique, story-rich bottles.
            </p>
            <p className="section-p">
              What started as personal introductions between friends and winemakers grew into a
              curated network built on trust, transparency, and a shared love for the craft.
              Our name says it all: every partnership begins with a handshake.
            </p>
            <Link to="/contact" className="text-cta">Connect With Us</Link>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className={styles.sectionPillars}>
        <div className={styles.pillarsInner}>
          <div className={`${styles.pillarsHeader} reveal`} ref={r}>
            <div className={styles.pillarsOrnament}>
              <div className={styles.ornLine} /><div className={styles.ornDiamond} /><div className={styles.ornLine} />
            </div>
            <h2 className={styles.pillarsH2}>What We Believe</h2>
            <p className={styles.pillarsSub}>Three principles guide every producer we pursue and every relationship we build.</p>
          </div>
          <div className={`${styles.pillarsGrid} reveal`} ref={r}>
            {pillars.map((p) => (
              <div className={styles.pillar} key={p.num}>
                <div className={styles.pillarNum}>{p.num}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION QUOTE ── */}
      <section className={styles.sectionMission}>
        <div className={styles.missionBg} />
        <div className={styles.missionOverlay} />
        <div className={`${styles.missionInner} reveal`} ref={r}>
          <p className={styles.missionEyebrow}>Our Mission</p>
          <p className={styles.missionQuote}>
            "We curate rare, high-value wines and deliver them into the hands
            of boutique retailers who understand and appreciate the story
            in every bottle."
          </p>
          <div className={styles.missionRule} />
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className={styles.sectionHow}>
        <div className={styles.howInner}>
          <div className={`reveal`} ref={r}>
            <p className="section-eyebrow">The Process</p>
            <h2 className="section-h2">How We Work</h2>
          </div>
          <div className={styles.howSteps}>
            {steps.map((s) => (
              <div className={`${styles.howStep} reveal`} ref={r} key={s.num}>
                <div className={styles.stepNum}>{s.num}</div>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepP}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className={`${styles.sectionCta} reveal`} ref={r}>
        <p className={styles.ctaEyebrow}>Work With Us</p>
        <h2 className={styles.ctaH2}>Ready to Start a <em>Conversation?</em></h2>
        <p className={styles.ctaSub}>
          Whether you're a producer looking for a thoughtful partner or a retailer<br />
          seeking wines with a story — we'd love to hear from you.
        </p>
        <Link to="/contact" className="btn-outline">Get In Touch</Link>
      </section>

      <Footer />
    </>
  );
}
