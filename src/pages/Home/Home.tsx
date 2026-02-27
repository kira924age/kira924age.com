import { Link } from "react-router";
import { WORKS } from "@/constants/works";
import { Breadcrumb } from "@/components/Breadcrumb";

import styles from "./Home.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

interface ResourceProps {
  title: string;
  description: string;
  to: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <Link to={props.to} className={styles.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Link>
  );
};

export const Home = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <Breadcrumb items={[{ label: "Home" }]} />

      <div class={styles.intro}>
        <div className={styles.heading}>Hi there, I'm kira924age</div>
        <p>
          Welcome! I'm a web developer who enjoys anime and manga. I earned my
          Bachelor of Engineering from The University of Electro-Communications
          in March 2023. Explore my site to discover more about my works and
          personal interests.
          <Link to="/about" class={styles.moreLink}>
            More about me
          </Link>
        </p>
      </div>

      <div class={styles.works}>
        <div className={styles.heading}>My works</div>
        <div class={styles.resources}>
          {WORKS.map((work) => (
            <Resource
              key={work.id}
              title={work.title}
              description={work.shortDescription}
              to={`/works/${work.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
