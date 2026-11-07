import { useState, useEffect, useRef } from "react";
import "./theme.css";
import { THEME_C } from "../../images.js";
import CNavbar from "./Navbar.jsx";
import CFooter from "./Footer.jsx";

const EMAIL = "Thomas.Bebbington@HandshakeWines.com";

const whoWeServe = [
  "Independent boutique wine retailers",
  "Fine dining & restaurant wine programs",
  "Family-owned NorCal wine producers",
  "Boutique hotel wine programs",
];

export default function ViniferaContact() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const revealRefs = useRef([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", role: "", message: "" });
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [botField, setBotField] = useState(""); // honeypot — real visitors never fill this

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

  const upd = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const blr = (k) => () => setTouched((p) => ({ ...p, [k]: true }));
  const err = (k) => touched[k] && !form[k].trim();
  const submit = async (e) => {
    e.preventDefault();
    const req = ["firstName", "lastName", "email", "message"];
    setTouched((p) => ({ ...p, ...Object.fromEntries(req.map((k) => [k, true])) }));
    if (!req.every((k) => form[k].trim())) return;

    // Local dev has no Netlify backend — just show the success state so the UI can be demoed.
    if (import.meta.env.DEV) { setSubmitted(true); return; }

    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", "bot-field": botField, ...form }).toString(),
      });
      if (!res.ok) throw new Error("Form submit failed");
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const fieldBase = (k) => ({
    position: "relative", background: "var(--c-bg3)",
    border: `1px solid ${err(k) ? "rgba(180,60,60,0.4)" : "var(--c-rule)"}`, transition: "border-color 0.3s",
  });
  const inputBase = { width: "100%", padding: "2rem 1.25rem 0.9rem", background: "transparent", border: "none", outline: "none", fontFamily: "var(--c-font-sans)", fontSize: "0.96rem", fontWeight: 400, color: "var(--c-dark)" };
  const labelBase = (val) => ({ position: "absolute", top: "1rem", left: "1.25rem", fontFamily: "var(--c-font-sans)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--c-muted)", pointerEvents: "none", opacity: val ? 0 : 1, transition: "opacity 0.25s" });

  return (
    <>
      <CNavbar />

      <section className="c-page-hero" style={{ height: "58vh", minHeight: "420px" }}>
        <img src={THEME_C.contactHero} className={`c-hero-img${imgLoaded ? " loaded" : ""}`}
          onLoad={() => setImgLoaded(true)} alt="Contact" />
        <div className="c-hero-overlay-dark" />
        <div className="c-hero-content-dark">
          <p className="c-hero-eyebrow-dark">Reach Out</p>
          <h1 className="c-hero-h1-dark">Let's Start a<br /><em>Conversation</em></h1>
          <div className="c-hero-rule-dark" />
        </div>
      </section>

      <section style={{ background: "var(--c-bg3)", padding: "8rem 4rem", borderBottom: "1px solid var(--c-rule)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.65fr", gap: "8rem", alignItems: "start" }}>

          {/* Info */}
          <div className="c-reveal" ref={r}>
            <p className="c-eyebrow">Get In Touch</p>
            <h2 className="c-h2">Every great partnership<br />begins with a <em>hello.</em></h2>
            <p className="c-p" style={{ marginBottom: "2.5rem" }}>
              Whether you're a Northern California producer seeking thoughtful placement, a retailer,
              or a restaurant looking for wines with a genuine story — Thomas would love to hear from you.
            </p>
            <div style={{ width: "40px", height: "1px", background: "var(--c-rule)", marginBottom: "2.5rem" }} />
            <p className="c-eyebrow" style={{ marginBottom: "1rem" }}>Direct Contact</p>
            {[
              { icon: "✉", content: <a href={`mailto:${EMAIL}`} style={{ color: "var(--c-green)", textDecoration: "none", wordBreak: "break-word" }}>{EMAIL}</a> },
              { icon: "◎", content: "Handshake Wines, LLC. — Northern California" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "var(--c-font-serif)", fontSize: "0.9rem", color: "var(--c-green)", minWidth: "16px" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.94rem", fontWeight: 300, color: "var(--c-muted)", lineHeight: 1.65 }}>{item.content}</span>
              </div>
            ))}
            <div style={{ width: "40px", height: "1px", background: "var(--c-rule)", margin: "2.5rem 0" }} />
            <p className="c-eyebrow" style={{ marginBottom: "1rem" }}>Who We Work With</p>
            {whoWeServe.map((w) => (
              <div key={w} style={{ display: "flex", gap: "0.85rem", alignItems: "center", marginBottom: "0.65rem" }}>
                <div style={{ width: "4px", height: "4px", background: "var(--c-green)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.94rem", fontWeight: 300, color: "var(--c-muted)" }}>{w}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="c-reveal" ref={r}>
            <p className="c-eyebrow">Send a Message</p>
            <h2 className="c-h2" style={{ marginBottom: "2.5rem" }}>Tell Us About<br /><em>Your Needs</em></h2>
            {!submitted ? (
              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                <div style={{ display: "none" }} aria-hidden="true">
                  <label>Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} /></label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "1px" }}>
                  <div style={fieldBase("firstName")}><label style={labelBase(form.firstName)}>First Name *</label><input style={inputBase} type="text" value={form.firstName} onChange={upd("firstName")} onBlur={blr("firstName")} /></div>
                  <div style={fieldBase("lastName")}><label style={labelBase(form.lastName)}>Last Name *</label><input style={inputBase} type="text" value={form.lastName} onChange={upd("lastName")} onBlur={blr("lastName")} /></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", marginBottom: "1px" }}>
                  <div style={fieldBase("email")}><label style={labelBase(form.email)}>Email Address *</label><input style={inputBase} type="email" value={form.email} onChange={upd("email")} onBlur={blr("email")} /></div>
                  <div style={fieldBase("company")}><label style={labelBase(form.company)}>Winery / Business</label><input style={inputBase} type="text" value={form.company} onChange={upd("company")} /></div>
                </div>
                <div style={{ ...fieldBase("role"), marginBottom: "1px", position: "relative" }}>
                  <label style={labelBase(form.role)}>I Am A…</label>
                  <select style={{ ...inputBase, cursor: "pointer", appearance: "none" }} value={form.role} onChange={upd("role")}>
                    <option value=""></option>
                    <option value="retailer">Boutique Retailer</option>
                    <option value="restaurant">Restaurant / Fine Dining</option>
                    <option value="producer">Wine Producer / Winery</option>
                    <option value="hospitality">Hotel / Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                  <span style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--c-muted)", pointerEvents: "none", fontSize: "0.79rem" }}>▾</span>
                </div>
                <div style={{ ...fieldBase("message"), marginBottom: 0 }}>
                  <label style={labelBase(form.message)}>Your Message *</label>
                  <textarea style={{ ...inputBase, resize: "none", height: "140px", lineHeight: 1.75 }} value={form.message} onChange={upd("message")} onBlur={blr("message")} />
                </div>
                {sendError && (
                  <p style={{ marginTop: "1.25rem", fontFamily: "var(--c-font-sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "rgb(150,50,50)" }}>
                    Something went wrong sending your message. Please email Thomas directly at{" "}
                    <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>{EMAIL}</a>.
                  </p>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
                  <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.76rem", color: "var(--c-muted)", lineHeight: 1.6 }}>Fields marked * are required.</p>
                  <button type="submit" className="c-btn" disabled={sending} style={{ cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1 }}>{sending ? "Sending…" : "Send Message"}</button>
                </div>
              </form>
            ) : (
              <div style={{ padding: "3.5rem 2.5rem", textAlign: "center", border: "1px solid var(--c-rule)", background: "var(--c-bg2)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "1px", background: "var(--c-rule)" }} />
                  <div style={{ width: "6px", height: "6px", background: "var(--c-green)", transform: "rotate(45deg)" }} />
                  <div style={{ width: "40px", height: "1px", background: "var(--c-rule)" }} />
                </div>
                <p style={{ fontFamily: "var(--c-font-serif)", fontSize: "2rem", fontStyle: "italic", color: "var(--c-dark)", marginBottom: "0.85rem" }}>Thank you, {form.firstName}.</p>
                <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.94rem", fontWeight: 300, color: "var(--c-muted)", lineHeight: 1.9 }}>Thomas will be in touch shortly.<br />Every great partnership begins with exactly this kind of introduction.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div style={{ background: "var(--c-bg2)", padding: "5rem 4rem", borderBottom: "1px solid var(--c-rule)", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", justifyContent: "center", maxWidth: "900px", textAlign: "center" }}>
          {[{ stat: "Trust", label: "The Foundation of Every Deal" }, { stat: "Story", label: "Behind Every Bottle We Place" }, { stat: "Craft", label: "The Standard We Hold" }].map((item) => (
            <div key={item.stat} style={{ flex: "1", minWidth: "180px" }}>
              <div style={{ fontFamily: "var(--c-font-serif)", fontSize: "2.75rem", fontWeight: 400, color: "var(--c-green)", lineHeight: 1, marginBottom: "0.4rem" }}>{item.stat}</div>
              <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--c-muted)" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <CFooter />
    </>
  );
}
