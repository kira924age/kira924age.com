import { Link, useParams } from "react-router";

// @ts-ignore
import { FAVORITE_ANIME_LIST } from "@/constants/anime.ts";

import styles from "./AnimeDetail.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

export const AnimeDetail = () => {
  const { animeId } = useParams();

  const animeData = FAVORITE_ANIME_LIST.find(
    // @ts-ignore
    (anime) => String(anime.id) === animeId,
  );

  if (!animeData) {
    return <div>Anime not found</div>;
  }

  return (
    <div class={commonStyles.pageContainer}>
      <div class={styles.breadcrumb}>
        <Link className={styles.breadcrumbLink} to="/anime">
          Anime List
        </Link>
        <span class={styles.separator}>&gt;</span>
        <span class={styles.current}>{animeData.name}</span>
      </div>

      <div class={styles.detailContent}>
        <div class={styles.infoSection}>
          <div class={styles.header}>
            <div
              class={styles.title}
            >{`${animeData.name} (全${animeData.episode}話)`}</div>
            {animeData.tags && (
              <div class={styles.tags}>
                {animeData.tags.map((tag: string, index: number) => (
                  <span key={index} class={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {animeData.impressions && (
            <div class={styles.impressionsSection}>
              <div class={styles.impressionsLabel}>Impressions:</div>
              <p class={styles.impressions}>{animeData.impressions}</p>
            </div>
          )}
          {animeData.pvUrl && (
            <div class={styles.pvSection}>
              <div class={styles.pvLabel}>PV:</div>
              <div class={styles.pvContainer}>
                <iframe
                  src={animeData.pvUrl}
                  title="PV video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          {animeData.dAnimeUrl && (
            <button
              class={styles.danimeButton}
              onClick={() => {
                window.open(animeData.dAnimeUrl, "_blank");
              }}
            >
              dアニメストアで視聴
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
