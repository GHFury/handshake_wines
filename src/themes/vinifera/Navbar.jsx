import { NavLink, Link } from "react-router-dom";

export default function CNavbar() {
  const link = ({ isActive }) => `c-nav-link${isActive ? " active" : ""}`;

  return (
    <nav className="c-navbar">
      <div className="c-nav-left">
        <NavLink to="/"          end className={link}>Home</NavLink>
        <NavLink to="/about"         className={link}>About</NavLink>
        <NavLink to="/producers"     className={link}>Our Producers</NavLink>
      </div>
      <Link to="/" className="c-nav-logo-link">
        <img src="/images/logo.png" alt="Handshake Wines" className="c-nav-logo-img" />
      </Link>
      <div className="c-nav-right">
        <NavLink to="/team"          className={link}>Our Team</NavLink>
        <NavLink to="/contact"       className={link}>Contact</NavLink>
      </div>
    </nav>
  );
}
