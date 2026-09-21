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
      "A web application for organizing Codeforces problems and tracking progress.",
    overview:
      "Codeforces Problems helps users keep track of solved and unsolved problems, making it easier to organize practice and maintain a consistent study routine.",
    technologies: ["TypeScript", "React", "Web Application"],
    liveUrl: "https://cf.kira924age.com",
    repositoryUrl: "https://github.com/kira924age/CodeforcesProblems",
  },
  {
    id: "vrm-mixamo-viewer-waita",
    title: "vrm-mixamo-viewer-waita",
    shortDescription:
      "A browser-based viewer for VRM models with support for applying Mixamo animations.",
    overview:
      "This viewer lets users preview VRM characters in the browser and apply Mixamo animations to explore their movement quickly.",
    technologies: ["TypeScript", "3D", "VRM", "WebGL"],
    liveUrl: "https://vrm-viewer.kira924age.com",
    repositoryUrl: "https://github.com/kira924age/vrm-mixamo-viewer-waita",
  },
];
