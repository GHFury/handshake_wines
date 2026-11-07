import { useState } from "react";
import { Link } from "react-router-dom";

const EMAIL = "Thomas.Bebbington@HandshakeWines.com";

export default function CFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Local dev has no Netlify backend — show the success state so the UI can be demoed.
    if (import.meta.env.DEV) { setSubscribed(true); return; }

    setSending(true);
    setError(false);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "newsletter", email }).toString(),
      });
      if (!res.ok) throw new Error("Newsletter submit failed");
      setSubscribed(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="c-footer">
      <div className="c-footer-inner">
        <div className="c-footer-grid">

          <div>
            <img src="/images/logo.png" alt="Handshake Wines" className="c-f-logo-img" />
            <p className="c-f-tagline">
              Boutique family-owned wineries.<br />
              Northern California's finest.
            </p>
          </div>

          <div>
            <p className="c-f-col-title">Navigate</p>
            <ul className="c-f-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/producers">Our Producers</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="c-f-col-title">Stay Connected</p>
            <p style={{ fontFamily: "var(--c-font-sans)", fontSize: "0.89rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              New producers, rare allocations,<br />and upcoming events.
            </p>
            {!subscribed ? (
              <form className="c-nl-form" onSubmit={handleSubmit}>
                <input type="email" name="email" required className="c-nl-input" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="c-nl-btn" disabled={sending}>{sending ? "…" : "Join"}</button>
              </form>
            ) : <p className="c-nl-thanks">Thank you.</p>}
            {error && !subscribed && (
              <p style={{ marginTop: "0.75rem", fontFamily: "var(--c-font-sans)", fontSize: "0.84rem", color: "#e0a0a0" }}>
                Couldn't sign you up just now — please try again.
              </p>
            )}
          </div>

        </div>
        <div className="c-footer-bottom">
          <p className="c-f-copy">© 2026 Handshake Wines, LLC. All rights reserved.</p>
          <p className="c-f-email"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </div>
    </footer>
  );
}
