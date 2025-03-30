import styles from "./Home.module.scss";
import commonStyles from "@/styles/commonStyles.module.scss";

interface ResourceProps {
  title: string;
  description: string;
  link: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <a href={props.link} class={styles.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export const Home = () => {
  return (
    <div class={commonStyles.pageContainer}>
      <div class={styles.intro}>
        <div className={styles.heading}>Hi there, I'm kira924age</div>
        <p>
          Welcome! I'm a web developer who enjoys anime and manga. I earned my
          Bachelor of Engineering from The University of Electro-Communications
          in March 2023. Explore my site to discover more about my works and
          personal interests.
        </p>
      </div>

      <div class={styles.works}>
        <h1>My works</h1>
        <div class={styles.resources}>
          <Resource
            title="Codeforces Problems"
            description="A web application to manage your Codeforces Problems. You can check the problems you have solved, the problems you have not solved."
            link="https://github.com/kira924age/CodeforcesProblems"
          />
          <Resource
            title="vrm-mixamo-viewer-waita"
            description="An online tool designed for viewing 3D models in the VRM format. It is also possible to apply animations to the model."
            link="https://github.com/kira924age/vrm-mixamo-viewer-waita"
          />
        </div>
      </div>
    </div>
  );
};
