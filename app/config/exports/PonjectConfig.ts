export type TProject = {
  title: string;
  body: string;
  link?: "View Demo" | "View Site";
  linkHref: string;
  code: string;
  technologies: string[];
};
export const projectsInfo: TProject[] = [
  {
    title: "Word-Lookup",
    body: "This simple dictionary app allows users to search for information about many common and uncommon words.",
    // link: "View Demo",
    linkHref: "1",
    code: "https://github.com/KensProjects/word-lookup",
    technologies: ["Typescript", "React (Vite)", "Tailwind", "Dictionary API"],
  },
  {
    title: "List-Maker",
    body: "A full-stack MERN app that allows users to create an account and take simple notes.",
    // link: "View Demo",
    linkHref: "a",
    code: "https://github.com/KensProjects/list-maker",
    technologies: [
      "Typescript",
      "React (Vite)",
      "Express",
      "Node.js",
      "MongoDB (Atlas) + Mongoose",
      "Jotai",
      "JSONWebToken",
      "Tailwind",
    ],
  },
];
