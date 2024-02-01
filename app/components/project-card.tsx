import React from "react";
import Btn from "./btn";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  id: number;
  year: string;
  title: string;
  description: string;
  tags: readonly string[];
  techStack: readonly string[];
  imageUrl: StaticImageData;
  projectsDataLength: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  year,
  title,
  description,
  tags,
  techStack,
  imageUrl,
  projectsDataLength,
}) => {
  return (
    <div
      key={id}
      className="mt-20 cursor-pointer justify-between border-b border-[#282828] font-mono md:flex md:flex-row"
    >
      <div className="flex flex-col md:w-1/2">
        <div className="align-center flex w-full items-center justify-between md:items-start">
          <p className="font-tthoves text-xs font-bold tracking-tighter text-[#282828] md:text-3xl">
            0{id + 1}/0{projectsDataLength}{" "}
          </p>
          <p className="font-tthoves text-xs font-medium tracking-tighter text-[#282828] md:text-xl md:font-semibold">
            {year}
          </p>
        </div>
        <p className="font-tthoves mb-5 hidden w-full text-base font-semibold tracking-tight text-[#282828] md:mb-0 md:mt-10 md:block md:w-[30ch]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          dui aliquet, suscipit leo non, posuere mi. In at orci accumsan, tempus
          urna et, blandit nunc. Vestibulum ornare eros eu dapibus tristique.
        </p>
        <div className="mb-0 mt-1 flex flex-row items-center justify-between md:mb-10 md:mt-auto">
          <h1 className="font-grotesk text-2xl font-semibold tracking-tighter text-[#282828] md:text-5xl lg:text-7xl">
            {title}
          </h1>
          <div className="flex flex-row gap-1">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-[#282828] px-3 py-1"
              >
                <p className="font-tthoves text-xs font-medium tracking-tighter text-[#282828]">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figure className="mb:0 mt-5 h-auto w-full pl-0 md:mb-10 md:mt-0 md:h-auto md:w-1/2 md:pl-10">
        <Image src={imageUrl} alt="Picture of project" />
      </figure>
    </div>
  );
};

export default ProjectCard;
