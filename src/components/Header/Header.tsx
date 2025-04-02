import { Link } from "react-router";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/">kira924age.com</Link>
        </div>
        <nav className={styles.nav}>
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
      </div>
    </header>
  );
};
