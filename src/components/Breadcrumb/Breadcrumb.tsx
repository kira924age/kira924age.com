import { Link } from "react-router";

import styles from "./Breadcrumb.module.scss";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className={styles.itemWrap}>
            {item.to && !isCurrent ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span className={isCurrent ? styles.current : undefined}>{item.label}</span>
            )}
            {!isCurrent && <span className={styles.separator}>&gt;</span>}
          </span>
        );
      })}
    </nav>
  );
};
