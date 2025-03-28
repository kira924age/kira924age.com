import { h } from "preact";
import { Link } from "preact-router";
import { FAVORITE_ANIME_LIST } from "@/constants/anime";
import styles from "./Anime.module.scss";

export const Anime = () => {
  return (
    <div class={styles.animeContainer}>
      <div class={styles.header}>
        <p class={styles.mainTitle}>My Favorite Anime</p>
        <p class={styles.subTitle}>
          Here are some of the anime series that I truly love. Click on any card
          to learn more details!
        </p>
      </div>

      <div class={styles.animeGrid}>
        {FAVORITE_ANIME_LIST.map((anime) => (
          <Link href={"/anime/" + anime.id}>
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
                {anime.description && (
                  <p class={styles.description}>{anime.description}</p>
                )}
                {anime.tags && (
                  <div class={styles.tags}>
                    {anime.tags.map((tag, index) => (
                      <span key={index} class={styles.tag}>
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
