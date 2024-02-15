import { skillsData } from "@/lib/data";
import SkillsCard from "./components/skills-card";
import Marquee from "react-fast-marquee";
import SectionTitleText from "../shared/section-title-text";

function Skills() {
  return (
    <main className="mb-10 mt-40 w-screen px-10 md:mt-60 md:max-w-screen-xl">
      <div className="my-20 flex w-full flex-col items-center justify-center">
        <Marquee
          autoFill={true}
          speed={200}
          className="mb-20 h-fit overflow-hidden"
        >
          <SectionTitleText title="MY SKILLS •" />
        </Marquee>
      </div>
      <article className="no-scrollbar flex w-full flex-col justify-between gap-10 overflow-x-scroll md:w-full md:overflow-hidden">
        <div className="overflox-w-scroll md:overflow-hidden">
          <ul className="flex h-fit w-fit flex-row content-center justify-around gap-5 md:grid md:w-full md:grid-cols-2 md:content-normal md:gap-10 md:overflow-hidden lg:grid-cols-3 xl:grid-cols-4">
            {skillsData.map((skill) => (
              <SkillsCard
                key={skill.name}
                skillsTitle={skill.name}
                skillsDescription={skill.description}
              />
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}

export default Skills;
