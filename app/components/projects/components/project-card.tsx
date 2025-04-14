"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/app/hooks/";
import Link from "next/link";
import { isIOS } from "react-device-detect";

type ProjectLink = { appStore?: string; googlePlay?: string };

type ProjectCardProps = {
  id: number;
  year: string;
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  projectsDataLength: number;
  projectLinks: readonly ProjectLink[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  year,
  title,
  description,
  tags,
  imageUrl,
  projectsDataLength,
  projectLinks,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const ScrollReveal = useScrollReveal;
  const linkToProject = isIOS
    ? projectLinks.find((link) => link.appStore)?.appStore || ""
    : projectLinks.find((link) => link.googlePlay)?.googlePlay || "";

  return (
    <ScrollReveal delay={0} duration={0.8} initialY={10}>
      <Link href={linkToProject} target="_blank">
        <div
          key={id}
          className="mt-20 cursor-pointer justify-between border-b font-mono dark:border-[#e9e9e9] md:flex md:flex-row md:border-[#282828]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:w-1/2">
            <div className="align-center flex w-full items-center justify-between md:items-start">
              <p className="font-tthoves text-xs font-bold tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-3xl">
                0{id + 1}/0{projectsDataLength}{" "}
              </p>
              <p className="font-tthoves text-xs font-medium tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-xl md:font-semibold">
                {year}
              </p>
            </div>
            <div className="hidden md:mt-10 md:flex md:w-full md:justify-between">
              <p className="mb-5 hidden w-full font-tthoves text-base font-semibold tracking-tight text-[#282828] dark:text-[#e9e9e9] md:mb-0 md:block md:w-[40ch]">
                {description}
              </p>
              <button className="hidden h-fit rounded-full bg-[#282828] p-3 dark:bg-[#e9e9e9] md:block">
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  <GoArrowUpRight
                    size={20}
                    className="fill-white dark:fill-black"
                  />
                </motion.span>
              </button>
            </div>
            <div className="mb-0 mt-5 flex flex-row justify-between md:mb-10 md:mt-auto">
              <h1 className="font-grotesk text-2xl font-semibold tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-5xl lg:text-7xl">
                {title}
              </h1>
              <div className="flex flex-row gap-3">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-center rounded-full border border-[#282828] px-3 py-1 dark:border-[#e9e9e9] md:mt-auto"
                  >
                    <p className="font-tthoves text-xs font-medium tracking-tighter text-[#282828] dark:text-[#e9e9e9]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.figure className="mb:0 relative mt-5 h-auto w-full overflow-hidden border-none pl-0 md:mb-10 md:mt-0 md:h-auto md:w-1/2 md:pl-10">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.025 : 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden border-none"
              style={{
                overflow: "hidden",
                transformOrigin: "top left",
              }}
            >
              <Image
                src={imageUrl}
                alt="En bild på projektet."
                className="border-none"
                loading="eager"
              />
            </motion.div>
          </motion.figure>
        </div>
      </Link>
    </ScrollReveal>
  );
};

export default ProjectCard;
