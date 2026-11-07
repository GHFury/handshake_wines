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
        <NavLink to="/theme-a"        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Home</NavLink>
        <NavLink to="/theme-a/about"   className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>About</NavLink>
        <NavLink to="/theme-a/team"    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Our Team</NavLink>
      </div>

      <NavLink to="/theme-a" className={styles.logo}>Handshake Wines</NavLink>

      <div className={styles.right}>
        <NavLink to="/theme-a/contact" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Contact</NavLink>
      </div>
    </nav>
  );
}
