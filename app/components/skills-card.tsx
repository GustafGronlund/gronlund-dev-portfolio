"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

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
      className="font-tthoves relative flex h-[200px] w-[250px] flex-col justify-between overflow-hidden border-0 bg-[#282828] p-3 text-[#f8f8f8] md:h-full md:w-full"
    >
      <div>
        <motion.p
          initial={{
            color: "#fff",
          }}
          animate={{
            color: hover ? "#282828" : "#ffff",
          }}
          transition={{
            duration: 0.5,
          }}
          className="font-tthoves relative z-20 cursor-default pb-3 text-base font-semibold tracking-tight"
        >
          {skillsTitle}
        </motion.p>
        <motion.p
          initial={{
            color: "#fff",
          }}
          animate={{
            color: hover ? "#282828" : "#ffff",
          }}
          transition={{
            duration: 0.3,
          }}
          className="font-tthoves relative z-20 cursor-default overflow-hidden text-sm tracking-tight text-[#f8f8f8]"
        >
          {skillsDescription}
        </motion.p>
      </div>
      <motion.p
        initial={{
          color: "#fff",
        }}
        animate={{
          color: hover ? "#282828" : "#ffff",
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative z-20 cursor-default pt-10"
      >
        ⸻
      </motion.p>
      <motion.div
        initial={{
          width: 50,
          height: 50,
          backgroundColor: "#fff",
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
        className="absolute z-10 hidden rounded-full md:block"
      ></motion.div>
    </motion.li>
  );
};

export default SkillsCard;
