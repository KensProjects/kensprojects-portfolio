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
    link: "View Site",
    linkHref: "https://kensprojects.github.io/word-lookup/",
    code: "https://github.com/KensProjects/word-lookup",
    technologies: ["Typescript", "React", "TailwindCSS"],
  },
  {
    title: "Matching Game", 
    body: "My version on the popular game. Allows players to match numbers for points.",
    link: "View Site",
    linkHref: "https://matching-game-ashy.vercel.app/",
    code: "https://github.com/KensProjects/matching-game",
    technologies: ["React", "Typescript", "Zustand"]
  },{
    title:"Trivia Game",
    body:"A trivia app that allows players to test their knowledge!",
    link:"View Site",
    linkHref:"https://trivia-game-ts.vercel.app/",
    code:"https://github.com/KensProjects/trivia-game-ts",
    technologies:[
      'React',
      'Typescript',
      'Zustand',
      'React-Query',
      'TailwindCSS']
  }
  // {
  //   title: "List-Maker",
  //   body: "A full-stack MERN app that allows users to create an account and take simple notes.",
  //   // link: "View Demo",
  //   linkHref: "a",
  //   code: "https://github.com/KensProjects/list-maker",
  //   technologies: [
  //     "Typescript",
  //     "React (Vite)",
  //     "Express",
  //     "Node.js",
  //     "MongoDB (Atlas) + Mongoose",
  //     "Jotai",
  //     "JSONWebToken",
  //     "Tailwind",
  //   ],
  // },
  // {
  //   title: "Shopping App Demo",
  //   body: "A full-stack Next.js application that utilizes React-Query and Next-Auth to proivide account creation, authenication, and a simulated shopping experience for end users.",
  //   // link: "View Site",
  //   code: "https://github.com/KensProjects/shopping-app-demo",
  //   technologies: [
  //     "Typescript",
  //     "React",
  //     "Next.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Prisma",
  //     "Jotai",
  //     "TailwindCSS",
  //     "NextAuth",
  //     "React-Query",
  //   ],
  //   linkHref: "https://shopping-app-demo.vercel.app/",
  // },
];
