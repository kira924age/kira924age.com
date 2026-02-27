import { useParams } from "react-router";

// @ts-ignore
import { FAVORITE_ANIME_LIST } from "@/constants/anime.ts";
import { Breadcrumb } from "@/components/Breadcrumb";

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
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Anime", to: "/anime" },
          { label: animeData.name },
        ]}
      />

      <div class={styles.detailContent}>
        <div class={styles.infoSection}>
          <div class={styles.header}>
            <div
              class={styles.title}
            >{`${animeData.name} (全${animeData.episode}話)`}</div>
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
