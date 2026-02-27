import React from "react";

import styles from "./HamburgerButton.module.scss";

type Props = {
  open: boolean;
  onClick: () => void;
};

export const HamburgerButton: React.FC<Props> = ({ open, onClick }) => {
  return (
    <button
      type="button"
      aria-label={open ? "メニューを閉じる" : "メニューを開く"}
      aria-expanded={open}
      className={styles.hamburgerButton}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div
        className={`${styles.hamburgerButtonContainer} ${
          open ? styles.open : styles.notOpen
        }`}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
    </button>
  );
};
