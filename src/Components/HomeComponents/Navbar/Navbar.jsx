import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../../public/images/logo.webp";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarLogoContainer}>
          <a href="/" aria-label="Ana Sayfa">
            <img
              src={logo}
              alt="Akdeniz Üniversitesi Bilgisayar Topluluğu Logo"
              className={styles.image}
              width={40}
            />
          </a>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barActive : ""}></span>
          <span className={isOpen ? styles.barActive : ""}></span>
          <span className={isOpen ? styles.barActive : ""}></span>
        </div>

        <nav
          className={`${styles.navbarLinks} ${isOpen ? styles.navActive : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }>
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/hakkimizda"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }>
            Hakkımızda
          </NavLink>
          <NavLink
            to="/etkinlikler"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }>
            Etkinlikler
          </NavLink>
          <NavLink
            to="/departmanlar"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }>
            Departmanlar
          </NavLink>
          <NavLink
            to="/akdenizgamejam2026"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }>
            Game Jam 26'
          </NavLink>
          <div className={styles.mobileJoinButton}>
            <Link to="http://mediko.akdeniz.edu.tr/topluluk/" target="_blank">
              <button className={styles.joinButton}>Katıl</button>
            </Link>
          </div>
        </nav>

        <div className={styles.desktopJoinContainer}>
          <Link to="http://mediko.akdeniz.edu.tr/topluluk/" target="_blank">
            <button className={styles.joinButton}>Katıl</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
