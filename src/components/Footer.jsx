import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <>
      {/* Fixed back-to-selector button — same pattern as Theme B & C */}
      <Link to="/" style={{
        position: "fixed", bottom: "2rem", right: "2rem", zIndex: 300,
        fontFamily: "var(--font-sans)", fontSize: "0.52rem", fontWeight: 500,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "var(--bg)", background: "var(--gold)",
        padding: "0.65rem 1.25rem", textDecoration: "none",
        transition: "background 0.3s",
      }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--gold-lt)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "var(--gold)"}
      >← All Themes</Link>
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div>
            <div className="f-logo">Handshake Wines</div>
            <p className="f-tagline">
              Bottles with meaning,<br />worth discovering.
            </p>
          </div>

          <div>
            <p className="f-col-title">Navigate</p>
            <ul className="f-links">
              <li><Link to="/theme-a">Home</Link></li>
              <li><Link to="/theme-a/about">About</Link></li>
              <li><Link to="/theme-a/team">Our Team</Link></li>
              <li><Link to="/theme-a/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="f-col-title">Stay Connected</p>
            <p className="f-nl-text">
              Be the first to hear about new producers,<br />
              rare allocations, and upcoming events.
            </p>
            {!subscribed ? (
              <form className="nl-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="nl-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="nl-btn">Join</button>
              </form>
            ) : (
              <p className="nl-thanks">Thank you for joining us.</p>
            )}
          </div>

        </div>

        <div className="footer-bottom">
          <p className="f-copy">© 2025 Handshake Wines, LLC. All rights reserved.</p>
          <p className="f-email">
            <a href="mailto:hello@handshakewines.com">hello@handshakewines.com</a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
