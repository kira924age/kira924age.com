export type Work = {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl: string;
};

export const WORKS: Work[] = [
  {
    id: "codeforces-problems",
    title: "Codeforces Problems",
    shortDescription:
      "A web application to manage your Codeforces Problems. You can check the problems you have solved and the problems you have not solved.",
    overview:
      "This project is a problem management tool for Codeforces users. It helps track solved/unsolved problems and organize daily practice more efficiently.",
    technologies: ["TypeScript", "React", "Web Application"],
    liveUrl: "https://cf.kira924age.com",
    repositoryUrl: "https://github.com/kira924age/CodeforcesProblems",
  },
  {
    id: "vrm-mixamo-viewer-waita",
    title: "vrm-mixamo-viewer-waita",
    shortDescription:
      "An online tool designed for viewing 3D models in the VRM format. It is also possible to apply animations to the model.",
    overview:
      "This viewer is focused on quickly previewing VRM models and testing character motion by applying Mixamo animations directly in the browser.",
    technologies: ["TypeScript", "3D", "VRM", "WebGL"],
    liveUrl: "https://vrm-viewer.kira924age.com",
    repositoryUrl: "https://github.com/kira924age/vrm-mixamo-viewer-waita",
  },
];
