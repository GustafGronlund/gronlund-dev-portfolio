import Btn from "./btn";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <main className="px-10 border-b md:max-w-screen-xl">
      <h1 className="mb-10 text-lg font-grotesk text-[#282828]">
        02.<span className="text-2xl text-gray-500">PROJECTS</span>
      </h1>
      {projectsData.map(function (project) {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </main>
  );
};

export default Projects;
