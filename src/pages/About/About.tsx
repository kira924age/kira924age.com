import commonStyles from "@/styles/commonStyles.module.scss";
import { Breadcrumb } from "@/components/Breadcrumb";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <section class={styles.hero}>
        <p class={styles.eyebrow}>About Me</p>
        <h1 class={styles.title}>Hi, I'm kira924age.</h1>
        <p class={styles.description}>
          I'm a web developer from Japan. I completed my Bachelor of Engineering
          at The University of Electro-Communications in March 2023.
        </p>
      </section>

      <section class={styles.section}>
        <h2>What I do</h2>
        <p>I mainly work on frontend-focused web development.</p>
      </section>

      <section class={styles.section}>
        <h2>Interests</h2>
        <p>
          Outside coding, I enjoy anime, manga, and music. This site also works
          as a personal archive of things I like and projects I have built.
        </p>
      </section>

      <section class={styles.section}>
        <h2>Certifications</h2>
        <p class={styles.certificationNote}>
          I obtained the following certifications as a hobby through personal
          interest and self-study.
        </p>
        <ul class={styles.certificationList}>
          <li>ITパスポート試験</li>
          <li>情報セキュリティマネジメント試験</li>
          <li>基本情報技術者試験</li>
          <li>実用英語技能検定準2級</li>
          <li>ファイナンシャル・プランニング技能士3級</li>
        </ul>
      </section>
    </div>
  );
};
