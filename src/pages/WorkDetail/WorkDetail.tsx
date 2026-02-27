import { useParams } from "react-router";

import commonStyles from "@/styles/commonStyles.module.scss";
import { WORKS } from "@/constants/works";
import { Breadcrumb } from "@/components/Breadcrumb";
import styles from "./WorkDetail.module.scss";

export const WorkDetail = () => {
  const { workId } = useParams();
  const work = WORKS.find((item) => item.id === workId);

  if (!work) {
    return (
      <div class={commonStyles.pageContainer}>
        <p>Work not found.</p>
      </div>
    );
  }

  return (
    <div class={commonStyles.pageContainer}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: work.title }]} />

      <section class={styles.header}>
        <h1 class={styles.title}>{work.title}</h1>
        <p class={styles.shortDescription}>{work.shortDescription}</p>
      </section>

      <section class={styles.section}>
        <h2>Overview</h2>
        <p>{work.overview}</p>
      </section>

      <section class={styles.section}>
        <h2>Tech Stack</h2>
        <div class={styles.tags}>
          {work.technologies.map((tech) => (
            <span key={tech} class={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {work.liveUrl && (
        <section class={styles.section}>
          <h2>Live URL</h2>
          <a
            href={work.liveUrl}
            target="_blank"
            rel="noreferrer"
            class={styles.liveUrl}
          >
            {work.liveUrl}
          </a>
        </section>
      )}

      <a href={work.repositoryUrl} target="_blank" rel="noreferrer" class={styles.repositoryButton}>
        View on GitHub
      </a>
    </div>
  );
};
