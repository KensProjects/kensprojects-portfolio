import React from "react";

export default function ProjectComponent({
  title,
  body,
  link,
  linkHref,
  code,
  technologies,
}: {
  title: string;
  body: string;
  link?: "View Demo" | "View Site";
  linkHref?: string;
  code: string;
  technologies: string[];
}) {
  return (
    <div className="h-fit sm:w-11/12 w-full border border-black text-center grid grid-cols-1 md:grid-cols-3 justify-between items-center text-black p-8 bg-gray-100">
      <div className="flex flex-col justify-center items-center h-full w-auto gap-8">
        <div className=" py-4 underline-offset-4 underline text-2xl">
          {title}
        </div>
        <p>{body}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center py-4">
        <div className=" py-4 underline-offset-4 underline text-2xl">
          Technologies Used
        </div>
        <ul className="list-inside grid grid-cols-2 justify-center items-center list-none h-fit w-full text-center gap-1">
          {technologies.map((technology: string, i) => {
            return <li key={i}>{technology}</li>;
          })}
        </ul>
      </div>

      <div className="flex gap-4 full justify-center items-center flex-col">
        <div className=" py-4 underline-offset-4 underline text-2xl">Links</div>
        {link && <a
          href={linkHref}
          target="_blank"
          rel="noopener nofererer"
          className="bg-violet-300 hover:bg-violet-200 duration-75 ease-in-out w-40 h-16 rounded-lg flex justify-center items-center"
        >
          {link}
        </a>}
        <a
          href={code}
          target="_blank"
          rel="noopener nofererer"
          className="bg-violet-300 hover:bg-violet-200 duration-75 ease-in-out w-40 h-16 rounded-lg flex justify-center items-center"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
