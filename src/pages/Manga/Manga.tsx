import { Link } from "react-router";
// @ts-ignore
import { FAVORITE_MANGA_LIST } from "@/constants/manga";

import styles from "./Manga.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

export const Manga = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <div class={styles.header}>
        <p class={styles.mainTitle}>My Favorite Comics</p>
        <p class={styles.subTitle}>
          Here are some of the comics that I truly love. Click on any card to
          learn more details!
        </p>
      </div>

      <div class={styles.animeGrid}>
        {/* @ts-ignore */}
        {FAVORITE_MANGA_LIST.map((manga) => (
          // @ts-ignore
          <Link to={"/manga/" + manga.id}>
            <div class={styles.animeCard} key={manga.id}>
              {manga.image && (
                <img
                  src={manga.image}
                  alt={manga.name}
                  class={styles.animeImage}
                />
              )}
              <div class={styles.cardContent}>
                <p class={styles.cardTitle}>{manga.name}</p>
                {/* @ts-ignore */}
                {manga.tags && (
                  <div class={styles.tags}>
                    {/* @ts-ignore */}
                    {manga.tags.map((tag: string) => (
                      <span key={tag} class={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {/* @ts-ignore */}
              {manga.copyright && (
                /* @ts-ignore */
                <div class={styles.copyRight}>{manga.copyright}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
