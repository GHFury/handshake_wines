import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import VideoHero from "../components/VideoHero.jsx";
import styles from "./HomePage.module.css";
import { THEME_A, VIDEOS } from "../images.js";

export default function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <VideoHero
        videoId={VIDEOS.themeA}
        poster={THEME_A.hero}
        overlay="linear-gradient(160deg, rgba(6,4,2,0.28) 0%, rgba(6,4,2,0.52) 55%, rgba(6,4,2,0.82) 100%)"
      >
        {/* Centered content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <div className={styles.heroContent} style={{ textAlign: "center", maxWidth: "860px", padding: "0 2rem" }}>
            <p className={styles.heroEyebrow}>Handshake Wines</p>
            <h1 className={styles.heroTitle}>
              Bottles with <em>Meaning,</em><br />Worth Discovering
            </h1>
            <div className={styles.heroRule} />
            <p className={styles.heroSub}>
              Curating rare, terroir-driven wines and placing them<br />
              in the hands of boutique retailers who understand the story.
            </p>
            <Link to="/theme-a/about" className="btn-outline">Discover Our Story</Link>
          </div>
        </div>
        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollTick} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </VideoHero>

      {/* ── WHO WE ARE ── */}
      <section className={styles.sectionWho}>
        <div className={styles.whoGrid}>
          <div className={styles.whoImgWrap}>
            <img
              src={THEME_A.whoWeAre}
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
            <Link to="/theme-a/about" className="text-cta">Learn More About Us</Link>
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
          <Link to="/theme-a/about" className="btn-outline">Read the Full Story</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
