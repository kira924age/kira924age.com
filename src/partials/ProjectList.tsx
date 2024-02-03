import React from "react";
import { ColorTags, Section, Tags } from "astro-boilerplate-components";

type ProjectProps = {
  link: string;
  img: {
    src: string;
    alt: string;
  };
  name: string;
  category: React.ReactNode;
  description: string;
};

const MyProject: React.FC<ProjectProps> = ({
  link,
  img,
  name,
  category,
  description,
}: ProjectProps) => {
  return (
    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      <div className="shrink-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <img
            className="h-36 w-36 hover:translate-y-1"
            src={img.src}
            alt={img.alt}
            loading="lazy"
          />
        </a>
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-2 md:flex-row">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <div className="text-xl font-semibold">{name}</div>
          </a>
          <div className="ml-3 flex flex-wrap gap-2">{category}</div>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const ProjectList = () => (
  <Section title={<>My works</>}>
    <div className="flex flex-col gap-6">
      <MyProject
        name="Codeforces Problems"
        description="Codeforces Problems is a web application to manage your Codeforces Problems. You can check the problems you have solved, the problems you have not solved."
        link="https://cf.kira924age.com"
        img={{
          src: "/assets/images/project-web-design.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.SKY}>React</Tags>
          </>
        }
      />
      <MyProject
        name="vrm-mixamo-viewer-waita"
        description="vrm-mixamo-viewer-waita is a online tool designed for viewing 3D models in the VRM format. It is also possible to apply animations to the model."
        link="https://vrm-viewer.kira924age.com"
        img={{ src: "/assets/images/project-fire.png", alt: "Project Fire" }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.SKY}>React</Tags>
            <Tags color={ColorTags.VIOLET}>Three.js</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
