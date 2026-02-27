import { Link } from "react-router";
// @ts-ignore
import { FAVORITE_ANIME_LIST } from "@/constants/anime";
import { Breadcrumb } from "@/components/Breadcrumb";

import styles from "./Anime.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

export const Anime = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Anime" }]} />

      <div class={styles.header}>
        <p class={styles.mainTitle}>My Favorite Anime</p>
        <p class={styles.subTitle}>
          Here are some of the anime series that I truly love. Click on any card
          to learn more details!
        </p>
      </div>

      <div class={styles.animeGrid}>
        {/* @ts-ignore */}
        {FAVORITE_ANIME_LIST.map((anime) => (
          // @ts-ignore
          <Link to={"/anime/" + anime.id} key={anime.id}>
            <div class={styles.animeCard}>
              {anime.image && (
                <img
                  src={anime.image}
                  alt={anime.name}
                  class={styles.animeImage}
                />
              )}
              <div class={styles.cardContent}>
                <p class={styles.cardTitle}>{anime.name}</p>
                {anime.tags && (
                  <div class={styles.tags}>
                    {anime.tags.map((tag: string) => (
                      <span key={tag} class={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {anime.copyright && (
                <div class={styles.copyRight}>{anime.copyright}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
