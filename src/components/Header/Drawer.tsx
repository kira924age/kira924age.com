import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router";
import styles from "./Drawer.module.scss";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Drawer: React.FC<DrawerProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.siteTitle}>
            <Link to="/" onClick={() => onOpenChange(false)}>
              kira924age.com
            </Link>
          </div>
          <ul className={styles.list}>
            <li>
              <Link to="/" onClick={() => onOpenChange(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/anime" onClick={() => onOpenChange(false)}>
                Anime
              </Link>
            </li>
            <li>
              <Link to="/manga" onClick={() => onOpenChange(false)}>
                Manga
              </Link>
            </li>
            <li>
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
