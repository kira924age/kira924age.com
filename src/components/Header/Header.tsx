import React, { useState } from "react";
import { Link } from "react-router";
import { HamburgerButton } from "./HamburgerButton";
import { Drawer } from "./Drawer";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.hamburgerButtonContainer}>
            <HamburgerButton open={isOpen} onClick={toggleIsOpen} />
          </div>
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
      <Drawer open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};
