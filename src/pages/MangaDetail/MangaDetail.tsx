import { useParams } from "react-router";

// @ts-ignore
import { FAVORITE_MANGA_LIST } from "@/constants/manga.ts";
import { Breadcrumb } from "@/components/Breadcrumb";

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
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Manga", to: "/manga" },
          { label: animeData.name },
        ]}
      />

      <div class={styles.detailContent}>
        <div class={styles.infoSection}>
          <div class={styles.header}>
            <div class={styles.title}>{`${animeData.name}`}</div>
            {animeData.tags && (
              <div class={styles.tags}>
                {animeData.tags.map((tag: string) => (
                  <span key={tag} class={styles.tag}>
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
