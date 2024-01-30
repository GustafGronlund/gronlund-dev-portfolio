import Btn from "./btn";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import ProjectCard from "./project-card";
import ComponentTitle from "./component-title";

const Projects = () => {
  return (
    <main className="px-10  md:max-w-screen-xl">
      <ComponentTitle number="03" title="PROJECTS" />
      {projectsData.map(function (project) {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </main>
  );
};

export default Projects;
