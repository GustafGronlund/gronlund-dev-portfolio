"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

type LinkAnimationProps = {
  title: string;
  href: string;
};

const LinkAnimation: React.FC<LinkAnimationProps> = ({ title, href }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.li
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="relative flex h-fit items-center justify-center overflow-y-hidden"
    >
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <motion.p
          initial={{ translateY: 0 }}
          animate={{ translateY: isHover ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute cursor-pointer font-tthoves text-base text-[#e9e9e9]"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ translateY: 0 }}
          animate={{ opacity: 1, translateY: isHover ? 0 : -30 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer font-tthoves text-base text-[#e9e9e9]"
        >
          {title}
        </motion.p>
      </Link>
    </motion.li>
  );
};

export default LinkAnimation;
