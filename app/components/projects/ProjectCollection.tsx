"use client";

import { useState } from "react";

import { TProject } from "../../config/exports/ProjectConfig";

import ProjectComponent from "./ProjectComponent";

import { projectsInfo } from "../../config/exports/ProjectConfig";

export default function ProjectCollection() {
  const [projects] = useState<TProject[]>(projectsInfo);
  return (
    <section className="py-12 flex flex-col justify-center items-center gap-8 text-black bg-white">
      <h2 className="text-4xl" id="projects">Projects</h2>
      <ul className="text-white w-full h-full gap-4 grid grid-cols-1">
        {projects.map((project, i) => {
          return (
            <li key={i} className="flex justify-center items-center ">
              <ProjectComponent
                title={project.title}
                body={project.body}
                link={project.link}
                linkHref={project.linkHref}
                code={project.code}
                technologies={project.technologies}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
