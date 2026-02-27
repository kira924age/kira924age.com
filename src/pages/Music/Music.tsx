import { FAVORITE_MUSIC_LIST } from "@/constants/music";
import { Breadcrumb } from "@/components/Breadcrumb";

import styles from "./Music.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

export const Music = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Music" }]} />

      <div class={styles.header}>
        <p class={styles.mainTitle}>My Favorite Music</p>
        <p class={styles.subTitle}>
          Here are some of the music that I truly love. Click on any card to
          learn more details!
        </p>
      </div>

      <div class={styles.animeGrid}>
        {/* @ts-ignore */}
        {FAVORITE_MUSIC_LIST.map((anime) => (
          <div class={styles.animeCard} key={anime.id}>
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
        ))}
      </div>
    </div>
  );
};
