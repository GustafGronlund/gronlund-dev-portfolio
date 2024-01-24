import React from "react";
import Btn from "./btn";
import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  tags: any;
  imageUrl: StaticImageData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <div
      key={id}
      className="py-10 md:flex md:flex-row font-mono border-t justify-between">
      <div className="mb-10">
        <h1 className="font-grotesk text-2xl mb-5">{title}</h1>
        <p className="font-mono text-base mb-5 md:w-[50ch]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          dui aliquet, suscipit leo non, posuere mi. In at orci accumsan, tempus
          urna et, blandit nunc. Vestibulum ornare eros eu dapibus tristique.
        </p>
        <div className="flex flex-row">
          <Btn text="Läs mer" className="w-fit" onClick={() => {}} />
        </div>
      </div>
      <figure className="md:w-1-/2s pl-10">
        <Image
          src={imageUrl}
          alt="Picture of project"
          className="rounded-lg shadow-md"
        />
      </figure>
    </div>
  );
};

export default ProjectCard;
