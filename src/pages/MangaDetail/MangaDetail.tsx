import { Link, useParams } from "react-router";

// @ts-ignore
import { FAVORITE_MANGA_LIST } from "@/constants/manga.ts";

import styles from "./MangaDetail.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

export const MangaDetail = () => {
  const { mangaId } = useParams();

  const animeData = FAVORITE_MANGA_LIST.find(
    // @ts-ignore
    (anime) => String(anime.id) === mangaId,
  );

  if (!animeData) {
    return <div>Anime not found</div>;
  }

  return (
    <div class={commonStyles.pageContainer}>
      <div class={styles.breadcrumb}>
        <Link className={styles.breadcrumbLink} to="/manga">
          Manga List
        </Link>
        <span class={styles.separator}>&gt;</span>
        <span class={styles.current}>{animeData.name}</span>
      </div>

      <div class={styles.detailContent}>
        <div class={styles.infoSection}>
          <div class={styles.header}>
            <div class={styles.title}>{`${animeData.name}`}</div>
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
          {/* @ts-ignore */}
          {animeData.impressions && (
            <div class={styles.impressionsSection}>
              <div class={styles.impressionsLabel}>Impressions:</div>
              {/* @ts-ignore */}
              <p class={styles.impressions}>{animeData.impressions}</p>
            </div>
          )}
          {/* @ts-ignore */}
          {animeData.pvUrl && (
            <div class={styles.pvSection}>
              <div class={styles.pvLabel}>PV:</div>
              <div class={styles.pvContainer}>
                <iframe
                  /* @ts-ignore */
                  src={animeData.pvUrl}
                  title="PV video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
