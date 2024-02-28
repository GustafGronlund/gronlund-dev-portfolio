import { projectsData } from "@/lib/data";
import ProjectCard from "./components/project-card";
import SectionTitleText from "../shared/section-title-text";

const Projects = () => {
  return (
    <main
      className="mb-10 mt-40 w-full px-10 md:mt-60 md:max-w-screen-xl"
      id="projects-section"
    >
      <div className="flex flex-col items-end justify-end">
        <SectionTitleText
          title={["Selected", "Projects"]}
          className="flex flex-col items-end justify-end"
        />
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
