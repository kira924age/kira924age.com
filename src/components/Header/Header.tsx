import { useState } from "preact/hooks";
import { Link } from "preact-router/match";

import styles from "./Header.module.scss";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // @ts-ignore
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* @ts-ignore */}
        <Link href="/">kira924age.com</Link>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            {/* @ts-ignore */}
            <Link href="/anime">anime</Link>
          </li>
          <li>
            {/* @ts-ignore */}
            <Link href="/manga">manga</Link>
          </li>
          <li>
            {/* @ts-ignore */}
            <Link href="/music">music</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
