import { useState } from "preact/hooks";
import { Link } from "react-router";

import styles from "./Header.module.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // @ts-ignore
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">kira924age.com</Link>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link to="/anime">anime</Link>
          </li>
          <li>
            <Link to="/manga">manga</Link>
          </li>
          <li>
            <Link to="/music">music</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
