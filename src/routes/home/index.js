import { h } from "preact";
import style from "./style.css";

const Home = () => {
  return (
    <div class={style.home}>
      <h1>Hi there, I'm kira924age</h1>
      <p>
        Welcome! I'm a web developer who enjoys anime and manga. I earned my
        Bachelor of Engineering from The University of Electro-Communications in
        March 2023. Explore my site to discover more about my works and personal
        interests.
      </p>

      <h1>My works</h1>
      <section>
        <Resource
          title="Codeforces Problems"
          description="Codeforces Problems is a web application to manage your Codeforces Problems. You can check the problems you have solved, the problems you have not solved."
          link="https://github.com/kira924age/CodeforcesProblems"
        />
        <Resource
          title="vrm-mixamo-viewer-waita"
          description="vrm-mixamo-viewer-waita is a online tool designed for viewing 3D models in the VRM format. It is also possible to apply animations to the model."
          link="https://github.com/kira924age/vrm-mixamo-viewer-waita"
        />
      </section>
    </div>
  );
};

const Resource = (props) => {
  return (
    <a href={props.link} class={style.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;
