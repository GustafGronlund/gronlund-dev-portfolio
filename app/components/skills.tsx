import { skillsData } from "@/lib/data";
import React from "react";
import ComponentTitle from "./component-title";
import SkillsCard from "./skills-card";
import Image from "next/image";
import wordart from "@/public/myskills.png";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <main className="mb-10 mt-40 w-screen px-10 md:mt-60 md:max-w-screen-xl">
      <Marquee autoFill={true} speed={200} className="h-fit overflow-hidden">
        <p className="w-full font-grotesk text-5xl text-[#282828] md:text-9xl">
          MY SKILLS - MY SKILLS - MY SKILLS - MY SKILLS - MY SKILLS -
        </p>
      </Marquee>
      <div className="py-10 font-mono text-sm md:px-0 md:text-base">
        <p>AND TECH</p>
        <p>THAT I USE</p>
      </div>
      <article className="no-scrollbar flex w-full flex-col justify-between gap-10 overflow-x-scroll md:w-full md:overflow-hidden">
        <ul className="flex h-fit w-fit flex-row content-center justify-around gap-5 overflow-x-scroll md:grid md:grid-cols-2 md:content-normal md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData.map((skill) => (
            <SkillsCard
              key={skill.name}
              skillsTitle={skill.name}
              skillsDescription={skill.description}
            />
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Skills;
