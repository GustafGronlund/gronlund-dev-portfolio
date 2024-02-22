"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionTitleTextProps = {
  title: string | string[];
  className?: string;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const SectionTitleText: React.FC<SectionTitleTextProps> = ({
  title,
  className,
}) => {
  const textArray = Array.isArray(title) ? title : [title];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <h1 className="font-tthoves text-5xl font-bold tracking-tighter text-[#282828] dark:text-[#e9e9e9] md:text-9xl">
      <span className="sr-only">{title}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        className={`aria-hidden ${className}`}
      >
        {textArray.map((line) => (
          <span key={line} className={`block`}>
            {line.split(" ").map((word) => (
              <span key={word} className="inline-block">
                {word.split("").map((char) => (
                  <motion.span
                    className="inline-block"
                    variants={defaultAnimations}
                    key={char}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </h1>
  );
};

export default SectionTitleText;
