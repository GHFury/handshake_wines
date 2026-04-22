import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <NavLink to="/"        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Home</NavLink>
        <NavLink to="/about"   className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>About</NavLink>
      </div>

      <NavLink to="/" className={styles.logo}>Handshake Wines</NavLink>

      <div className={styles.right}>
        <NavLink to="/contact" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Contact</NavLink>
      </div>
    </nav>
  );
}
