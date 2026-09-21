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
    id: "kira924age-com",
    title: "kira924age.com",
    shortDescription:
      "A personal website for sharing my projects, profile, and favorite anime, manga, and music.",
    overview:
      "This site is a personal hub for my web development work and interests. It brings together project details, profile information, and curated lists of anime, manga, and music in a compact static site.",
    technologies: [
      "Astro",
      "TypeScript",
      "SCSS",
      "Cloudflare Pages",
      "Cloudflare Zaraz",
      "Google Analytics",
    ],
    liveUrl: "https://kira924age.com",
    repositoryUrl: "https://github.com/kira924age/kira924age.com",
  },
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
