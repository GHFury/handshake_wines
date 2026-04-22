import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
          className={`${styles.heroImg} ${imgLoaded ? styles.loaded : ""}`}
          onLoad={() => setImgLoaded(true)}
          alt="Wine cellar"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Handshake Wines</p>
          <h1 className={styles.heroTitle}>
            Bottles with <em>Meaning,</em><br />Worth Discovering
          </h1>
          <div className={styles.heroRule} />
          <p className={styles.heroSub}>
            Curating rare, terroir-driven wines and placing them<br />
            in the hands of boutique retailers who understand the story.
          </p>
          <Link to="/about" className="btn-outline">Discover Our Story</Link>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollTick} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className={styles.sectionWho}>
        <div className={styles.whoGrid}>
          <div className={styles.whoImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80"
              className={styles.whoImg}
              alt="Pouring wine"
            />
          </div>
          <div className={styles.whoCopy}>
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-h2">
              Every Partnership<br />Begins with a <em>Handshake</em>
            </h2>
            <p className="section-p">
              Handshake Wines partners with wine producers who offer classic expressions
              of the soul of their regions — the soils and microclimates that make their
              terroirs truly special.
            </p>
            <p className="section-p">
              We bridge the gap between small, terroir-driven wineries and the boutique
              retailers who crave unique, story-rich bottles — wines overlooked by traditional
              distributors yet full of soul, intention, and a sense of place.
            </p>
            <Link to="/about" className="text-cta">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className={styles.sectionStory}>
        <div className={styles.storyBg} />
        <div className={styles.storyOverlay} />
        <div className={styles.storyInner}>
          <div className={styles.storyRuleGroup}>
            <div className={styles.storyRule} />
            <div className={styles.storyDiamond} />
            <div className={styles.storyRule} />
          </div>
          <p className={styles.storyQuote}>
            "What began as a few personal introductions between friends
            and winemakers has grown into a curated network built on trust,
            transparency, and a shared love for the craft."
          </p>
          <p className={styles.storyByline}>— Handshake Wines</p>
          <p className={styles.storyP}>
            Handshake Wines was born from a simple idea: that exceptional wines deserve
            exceptional homes. After years immersed in the wine world — tasting, traveling,
            and building relationships with passionate producers — every bottle we place
            carries the weight of that relationship.
          </p>
          <Link to="/about" className="btn-outline">Read the Full Story</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
