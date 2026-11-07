import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./theme.css";
import { THEME_B } from "../../images.js";

export default function VeritasContact() {
  const [scrolled, setScrolled]   = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const revealRefs = useRef([]);
  const [form, setForm]     = useState({ firstName: "", lastName: "", email: "", company: "", role: "", message: "" });
  const [touched, setTouched] = useState({});

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
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

  const upd  = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const blr  = (k) => () => setTouched((p) => ({ ...p, [k]: true }));
  const err  = (k) => touched[k] && !form[k].trim();

  const submit = (e) => {
    e.preventDefault();
    const req = ["firstName", "lastName", "email", "message"];
    setTouched((p) => ({ ...p, ...Object.fromEntries(req.map((k) => [k, true])) }));
    if (req.every((k) => form[k].trim())) setSubmitted(true);
  };

  const fieldStyle = (k) => ({
    position: "relative", background: "rgba(255,255,255,0.025)",
    border: `1px solid ${err(k) ? "rgba(200,80,80,0.5)" : "rgba(255,255,255,0.08)"}`,
    transition: "border-color 0.3s",
  });

  const inputStyle = {
    width: "100%", padding: "2rem 1.25rem 0.9rem", background: "transparent",
    border: "none", outline: "none", fontFamily: "var(--b-font-sans)",
    fontSize: "0.8rem", fontWeight: 300, color: "var(--b-white)",
  };
  const labelStyle = (val) => ({
    position: "absolute", top: "1rem", left: "1.25rem",
    fontFamily: "var(--b-font-sans)", fontSize: "0.48rem", fontWeight: 600,
    letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--b-muted)",
    pointerEvents: "none", opacity: val ? 0 : 1, transition: "opacity 0.25s",
  });

  return (
    <>
      <nav className={`b-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="b-nav-left">
          <Link to="/theme-b" className="b-logo-text">Handshake Wines</Link>
          <div className="b-logo-rule" />
          <span className="b-logo-tag">Portfolio</span>
        </div>
        <div className="b-nav-right">
          <NavLink to="/theme-b"     end className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Home</NavLink>
          <NavLink to="/theme-b/about"   className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>About</NavLink>
          <NavLink to="/theme-b/team"        className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Our Team</NavLink>
          <NavLink to="/theme-b/contact" className={({ isActive }) => `b-nav-link${isActive ? " active" : ""}`}>Contact</NavLink>
        </div>
      </nav>

      {/* HERO */}
      <section className="b-page-hero" style={{ height: "55vh", minHeight: "420px" }}>
        <img src={THEME_B.contactHero} className={`b-hero-img${imgLoaded ? " loaded" : ""}`} onLoad={() => setImgLoaded(true)} alt="Contact" />
        <div className="b-hero-overlay" />
        <div className="b-hero-content">
          <div className="b-hero-tag">Reach Out</div>
          <h1 className="b-hero-h1">Let's Start a<br /><em>Conversation</em></h1>
          <div className="b-hero-rule" />
        </div>
      </section>

      {/* CONTACT BODY */}
      <section style={{ background: "var(--b-bg)", padding: "7rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.65fr", gap: "7rem", alignItems: "start" }}>

          {/* Info col */}
          <div className="b-reveal" ref={r}>
            <p className="b-eyebrow">Get In Touch</p>
            <h2 className="b-h2">Every great partnership<br />begins with a <em>hello.</em></h2>
            <p className="b-p" style={{ marginBottom: "2.5rem" }}>Whether you're a producer or a retailer, we'd love to hear what you're working on.</p>

            <div style={{ width: "36px", height: "2px", background: "var(--b-blue)", marginBottom: "2.5rem" }} />

            {[{ icon: "✉", text: <><a href="mailto:hello@handshakewines.com" style={{ color: "var(--b-blue-lt)", textDecoration: "none" }}>hello@handshakewines.com</a></> },
              { icon: "◎", text: "Handshake Wines, LLC. — United States" }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.1rem" }}>
                <span style={{ fontFamily: "var(--b-font-serif)", fontSize: "0.9rem", color: "var(--b-blue)", minWidth: "16px" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.78rem", fontWeight: 300, color: "var(--b-muted)", lineHeight: 1.65 }}>{item.text}</span>
              </div>
            ))}

            <div style={{ width: "36px", height: "2px", background: "var(--b-blue)", margin: "2.5rem 0" }} />
            <p className="b-eyebrow" style={{ marginBottom: "1rem" }}>Who We Work With</p>
            {["Independent boutique wine retailers", "Fine dining & hospitality programs", "Wine producers seeking placement", "Allocation-list collectors"].map((w) => (
              <div key={w} style={{ display: "flex", gap: "0.85rem", alignItems: "center", marginBottom: "0.6rem" }}>
                <div style={{ width: "5px", height: "5px", background: "var(--b-blue)", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)" }}>{w}</span>
              </div>
            ))}
          </div>

          {/* Form col */}
          <div className="b-reveal" ref={r}>
            <p className="b-eyebrow">Send a Message</p>
            <h2 className="b-h2" style={{ marginBottom: "2.5rem" }}>Tell Us About<br /><em>Your Needs</em></h2>

            {!submitted ? (
              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "1px" }}>
                  <div style={fieldStyle("firstName")}>
                    <label style={labelStyle(form.firstName)}>First Name *</label>
                    <input style={inputStyle} type="text" value={form.firstName} onChange={upd("firstName")} onBlur={blr("firstName")} />
                  </div>
                  <div style={fieldStyle("lastName")}>
                    <label style={labelStyle(form.lastName)}>Last Name *</label>
                    <input style={inputStyle} type="text" value={form.lastName} onChange={upd("lastName")} onBlur={blr("lastName")} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "1px" }}>
                  <div style={fieldStyle("email")}>
                    <label style={labelStyle(form.email)}>Email *</label>
                    <input style={inputStyle} type="email" value={form.email} onChange={upd("email")} onBlur={blr("email")} />
                  </div>
                  <div style={fieldStyle("company")}>
                    <label style={labelStyle(form.company)}>Company / Winery</label>
                    <input style={inputStyle} type="text" value={form.company} onChange={upd("company")} />
                  </div>
                </div>
                <div style={{ ...fieldStyle("role"), marginBottom: "1px", position: "relative" }}>
                  <label style={labelStyle(form.role)}>I Am A…</label>
                  <select style={{ ...inputStyle, cursor: "pointer", appearance: "none" }} value={form.role} onChange={upd("role")}>
                    <option value=""></option>
                    <option value="retailer">Boutique Retailer</option>
                    <option value="producer">Wine Producer</option>
                    <option value="hospitality">Hospitality / Restaurant</option>
                    <option value="other">Other</option>
                  </select>
                  <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--b-muted)", pointerEvents: "none", fontSize: "0.65rem" }}>▾</span>
                </div>
                <div style={{ ...fieldStyle("message"), marginBottom: 0 }}>
                  <label style={labelStyle(form.message)}>Your Message *</label>
                  <textarea style={{ ...inputStyle, resize: "none", height: "140px", lineHeight: 1.75 }} value={form.message} onChange={upd("message")} onBlur={blr("message")} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
                  <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.6rem", color: "rgba(106,128,144,0.5)", lineHeight: 1.6 }}>Fields marked * are required.</p>
                  <button type="submit" style={{ padding: "0.9rem 2.5rem", background: "var(--b-blue)", border: "none", fontFamily: "var(--b-font-sans)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--b-bg)", cursor: "pointer", transition: "background 0.3s" }}
                    onMouseEnter={(e) => e.target.style.background = "var(--b-blue-lt)"}
                    onMouseLeave={(e) => e.target.style.background = "var(--b-blue)"}>
                    Send Message
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ padding: "3.5rem 2.5rem", textAlign: "center", border: "1px solid rgba(122,173,207,0.2)", background: "rgba(122,173,207,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "1px", background: "rgba(122,173,207,0.4)" }} />
                  <div style={{ width: "7px", height: "7px", background: "var(--b-blue)", transform: "rotate(45deg)" }} />
                  <div style={{ width: "40px", height: "1px", background: "rgba(122,173,207,0.4)" }} />
                </div>
                <p style={{ fontFamily: "var(--b-font-serif)", fontSize: "1.9rem", fontStyle: "italic", color: "var(--b-white)", marginBottom: "0.85rem" }}>Thank you, {form.firstName}.</p>
                <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)", lineHeight: 1.9 }}>We'll be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="b-footer">
        <div className="b-footer-inner">
          <div className="b-footer-grid">
            <div><div className="b-f-logo">Handshake Wines</div><p className="b-f-tagline">Bottles with meaning,<br />worth discovering.</p></div>
            <div>
              <p className="b-f-col-title">Navigate</p>
              <ul className="b-f-links">
                <li><Link to="/theme-b">Home</Link></li>
                <li><Link to="/theme-b/about">About</Link></li>
                <li><Link to="/theme-b/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="b-f-col-title">Email Us</p>
              <p style={{ fontFamily: "var(--b-font-sans)", fontSize: "0.75rem", fontWeight: 300, color: "var(--b-muted)" }}>
                <a href="mailto:hello@handshakewines.com" style={{ color: "var(--b-blue-lt)", textDecoration: "none" }}>hello@handshakewines.com</a>
              </p>
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
