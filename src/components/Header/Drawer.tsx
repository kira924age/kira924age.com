import React from "react";
import clsx from "clsx";

import * as Dialog from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router";
import styles from "./Drawer.module.scss";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open, onOpenChange }) => {
  const location = useLocation();

  const isActiveHome: boolean = location.pathname === "/";
  const isActiveAnime: boolean = location.pathname === "/anime";
  const isActiveManga: boolean = location.pathname === "/manga";
  const isActiveMusic: boolean = location.pathname === "/music";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.siteTitle}>
            <Link to="/" onClick={() => onOpenChange(false)}>
              kira924age.com
            </Link>
          </Dialog.Title>
          <ul className={styles.list}>
            <li className={clsx({ [styles.active]: isActiveHome })}>
              <Link to="/" onClick={() => onOpenChange(false)}>
                Home
              </Link>
            </li>
            <li className={clsx({ [styles.active]: isActiveAnime })}>
              <Link to="/anime" onClick={() => onOpenChange(false)}>
                Anime
              </Link>
            </li>
            <li className={clsx({ [styles.active]: isActiveManga })}>
              <Link to="/manga" onClick={() => onOpenChange(false)}>
                Manga
              </Link>
            </li>
            <li className={clsx({ [styles.active]: isActiveMusic })}>
              <Link to="/music" onClick={() => onOpenChange(false)}>
                Music
              </Link>
            </li>
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
