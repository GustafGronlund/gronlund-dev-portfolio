import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <main className="mb-10 mt-40 w-full px-10 md:mt-60 md:max-w-screen-xl">
      <div className="flex flex-col items-end justify-end">
        <h1 className="font-tthoves text-5xl font-bold tracking-tighter text-[#282828] md:text-9xl">
          Selected
        </h1>
        <h1 className="tracking-tigther font-tthoves text-5xl font-bold text-[#282828] md:text-9xl">
          Works
        </h1>
      </div>
      {projectsData.map(function (project) {
        return (
          <ProjectCard
            key={project.id}
            projectsDataLength={projectsData.length}
            {...project}
          />
        );
      })}
    </main>
  );
};

export default Projects;
