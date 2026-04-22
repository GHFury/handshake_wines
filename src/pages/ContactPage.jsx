import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./ContactPage.module.css";

const whoWeServe = [
  "Independent boutique wine retailers",
  "Fine dining programs seeking distinctive labels",
  "Wine producers looking for thoughtful distribution",
  "Hospitality buyers with discerning clientele",
];

export default function ContactPage() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const revealRefs = useRef([]);

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", role: "", message: "",
  });
  const [touched, setTouched] = useState({});

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const r = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const blur   = (k) => () => setTouched((p) => ({ ...p, [k]: true }));
  const hasErr = (k) => touched[k] && !form[k].trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    const req = ["firstName", "lastName", "email", "message"];
    setTouched((p) => ({ ...p, ...Object.fromEntries(req.map((k) => [k, true])) }));
    if (req.every((k) => form[k].trim())) setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className={styles.pageHero}>
        <img
          src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1920&q=80"
          className={`page-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)}
          alt="Wine glasses on a table"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-eyebrow">Reach Out</p>
          <h1 className="page-h1">Let's Start a<br /><em>Conversation</em></h1>
          <div className="page-rule" />
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <div className={styles.contactBody}>
        <div className={styles.contactGrid}>

          {/* Left — info */}
          <div className={`${styles.contactInfo} reveal`} ref={r}>
            <div className={styles.ciSection}>
              <p className={styles.ciLabel}>Get In Touch</p>
              <h2 className={styles.ciHeading}>
                Every great partnership<br />begins with a <em>hello.</em>
              </h2>
              <p className={styles.ciBody}>
                Whether you're a producer seeking thoughtful placement or a retailer
                looking for wines with a genuine story — we'd love to hear what you're working on.
              </p>
            </div>

            <div className={styles.ciRule} />

            <div className={styles.ciSection}>
              <p className={styles.ciLabel}>Direct Contact</p>
              <div className={styles.ciDetail}>
                <div className={styles.ciDetailRow}>
                  <span className={styles.ciIcon}>✉</span>
                  <span className={styles.ciText}>
                    <a href="mailto:hello@handshakewines.com">hello@handshakewines.com</a>
                  </span>
                </div>
                <div className={styles.ciDetailRow}>
                  <span className={styles.ciIcon}>◎</span>
                  <span className={styles.ciText}>Handshake Wines, LLC.<br />United States</span>
                </div>
              </div>
            </div>

            <div className={styles.ciRule} />

            <div className={styles.ciSection}>
              <p className={styles.ciLabel}>Who We Work With</p>
              <div className={styles.whoTags}>
                {whoWeServe.map((w, i) => (
                  <div className={styles.whoTag} key={i}>
                    <div className={styles.tagDot} />
                    <span className={styles.tagText}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={`${styles.formWrap} reveal`} ref={r}>
            <p className={styles.formEyebrow}>Send a Message</p>
            <h2 className={styles.formHeading}>Tell Us About<br /><em>Your Needs</em></h2>

            {!submitted ? (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={`${styles.field} ${hasErr("firstName") ? styles.fieldErr : ""}`}>
                    <label className={`${styles.fieldLabel} ${form.firstName ? styles.hidden : ""}`}>First Name *</label>
                    <input className={styles.input} type="text"
                      value={form.firstName} onChange={update("firstName")} onBlur={blur("firstName")} />
                  </div>
                  <div className={`${styles.field} ${hasErr("lastName") ? styles.fieldErr : ""}`}>
                    <label className={`${styles.fieldLabel} ${form.lastName ? styles.hidden : ""}`}>Last Name *</label>
                    <input className={styles.input} type="text"
                      value={form.lastName} onChange={update("lastName")} onBlur={blur("lastName")} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${hasErr("email") ? styles.fieldErr : ""}`}>
                    <label className={`${styles.fieldLabel} ${form.email ? styles.hidden : ""}`}>Email Address *</label>
                    <input className={styles.input} type="email"
                      value={form.email} onChange={update("email")} onBlur={blur("email")} />
                  </div>
                  <div className={styles.field}>
                    <label className={`${styles.fieldLabel} ${form.company ? styles.hidden : ""}`}>Company / Winery</label>
                    <input className={styles.input} type="text"
                      value={form.company} onChange={update("company")} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${styles.fieldFull}`} style={{ position: "relative" }}>
                    <label className={`${styles.fieldLabel} ${form.role ? styles.hidden : ""}`}>I Am A…</label>
                    <select className={styles.select} value={form.role} onChange={update("role")}>
                      <option value=""></option>
                      <option value="retailer">Boutique Retailer</option>
                      <option value="producer">Wine Producer / Winery</option>
                      <option value="hospitality">Hospitality / Restaurant</option>
                      <option value="other">Other</option>
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${styles.fieldFull} ${hasErr("message") ? styles.fieldErr : ""}`}>
                    <label className={`${styles.fieldLabel} ${form.message ? styles.hidden : ""}`}>Your Message *</label>
                    <textarea className={styles.textarea}
                      value={form.message} onChange={update("message")} onBlur={blur("message")} />
                  </div>
                </div>

                <div className={styles.submitRow}>
                  <p className={styles.formNote}>
                    Fields marked * are required.<br />
                    We typically respond within 2 business days.
                  </p>
                  <button type="submit" className={styles.btnSubmit}>Send Message</button>
                </div>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.successOrnament}>
                  <div className={styles.ornLine} /><div className={styles.ornDiamond} /><div className={styles.ornLine} />
                </div>
                <p className={styles.successTitle}>Thank you, {form.firstName}.</p>
                <p className={styles.successBody}>
                  We've received your message and will be in touch shortly.<br />
                  Every great partnership begins with exactly this kind of introduction.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <div className={`${styles.dividerBand} reveal`} ref={r}>
        <div className={styles.dividerInner}>
          {[
            { stat: "Trust",  label: "The Foundation of Every Deal" },
            { stat: "Story",  label: "Behind Every Bottle We Place" },
            { stat: "Craft",  label: "The Standard We Hold Our Partners To" },
          ].map((item, i) => (
            <>
              {i > 0 && <div className={styles.dividerVr} key={`vr-${i}`} />}
              <div className={styles.dividerBlock} key={item.stat}>
                <div className={styles.divStat}>{item.stat}</div>
                <p className={styles.divLabel}>{item.label}</p>
              </div>
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
