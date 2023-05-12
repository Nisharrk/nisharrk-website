import React from "react";
import Image from "next/image";
import projects from "./projectsData";

export default function Portfolio() {
  return (
    <div className="text-white">
      <div className="text-center md:p-10">
        <h3 className="text-3xl py-1">Projects</h3>
        <p className="text-md py-5 leading-8 text-gray-200 md:text-xl max-w-2xl mx-auto">
          Over the learning period, I have made some projects that demonstrate
          my learnings. These projects demonstrate my{" "}
          <span className="text-teal-500 font-semibold">frontend</span>,{" "}
          <span className="text-teal-500 font-semibold">backend</span> and
          <span className="text-teal-500 font-semibold"> database</span> skills.
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <div
            key={project.name}
            className="text-center shadow-md hover:shadow-lg shadow-teal-600 hover:shadow-teal-400 p-10 rounded-xl my-10 md:mx-20"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                width={400}
                height={400}
                alt={project.name}
                style={{
                  margin: "auto",
                }}
              />
              <h2 className="text-2xl pt-8 pb-2 font-bold text-teal-600">
                {project.name}
              </h2>
            </a>
            <p className="py-2 text-md">{project.description}</p>
            <h6 className="pt-3 pb-2 text-teal-600 text-lg">
              Technologies Used
            </h6>
            <div className="grid grid-cols-2 max-w-xl mx-auto">
              {project.tech.map((technology) => (
                <p
                  className="text-gray-200 text-sm py-1 leading-none"
                  key={technology}
                >
                  {technology}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
