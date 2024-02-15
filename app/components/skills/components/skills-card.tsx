"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type SkillsCardProps = {
  skillsTitle: string;
  skillsDescription: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({
  skillsTitle,
  skillsDescription,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={skillsTitle}
      className="relative flex h-[200px] w-[250px] flex-col justify-between overflow-hidden border-0 bg-[#282828] p-3 font-tthoves dark:bg-[#e9e9e9]  md:h-full md:w-full"
    >
      <div>
        <p
          className={`relative z-20 cursor-default pb-3 font-tthoves text-base font-semibold tracking-tight ${hover ? "!text-[#282828] transition duration-500 dark:!text-[#fff]" : "text-[#fff] dark:text-[#282828]"}`}
        >
          {skillsTitle}
        </p>
        <p
          className={`relative z-20 cursor-default overflow-hidden font-tthoves text-sm tracking-tight ${hover ? "!text-[#282828] transition duration-500 dark:!text-[#fff]" : "text-[#fff] dark:text-[#282828]"}`}
        >
          {skillsDescription}
        </p>
      </div>
      <p
        className={`relative z-20 cursor-default pt-10 ${hover ? "!text-[#282828] transition duration-500 dark:!text-[#fff]" : "text-[#fff] dark:text-[#282828]"}`}
      >
        ⸻
      </p>
      <motion.div
        initial={{
          width: 50,
          height: 50,
          opacity: 0,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hover ? 10 : 0,
          opacity: hover ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute z-10 hidden rounded-full bg-[#fff] dark:bg-black md:block"
      ></motion.div>
    </motion.li>
  );
};

export default SkillsCard;
