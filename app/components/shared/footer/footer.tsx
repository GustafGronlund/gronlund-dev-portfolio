"use client";

import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import FooterArrow from "./components/footer-arrow";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseOverFooter, setMouseOverFooter] = useState(false);
  const handleMouseMove = (event: any) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    setCursorPosition({ x: mouseX, y: mouseY });
  };

  return (
    <motion.footer
      onMouseMove={handleMouseMove}
      className="flex h-dvh w-full flex-col justify-between bg-[#282828] px-10 pt-10 dark:bg-[#e9e9e9] md:h-fit md:items-center md:px-0 md:pt-0"
      id="contact-section"
    >
      <motion.div
        className="cursor h-10 w-10 rounded-full bg-gray-50 opacity-50 blur-xl dark:bg-[#282828]"
        style={{
          position: "absolute",
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: "translate(-50%, -50%)",
        }}
        onMouseEnter={() => setMouseOverFooter(true)}
        onMouseLeave={() => setMouseOverFooter(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMouseOverFooter ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <div className="flex w-full flex-col justify-between md:max-w-screen-xl md:flex-row md:pl-10">
        <div className="flex w-full flex-col pt-10 md:w-1/2 md:gap-20 md:pt-20">
          <h1 className="cursor-default text-left font-tthoves text-3xl font-bold tracking-tighter text-[#e9e9e9] dark:text-[#282828] md:text-9xl">
            Want to reach out?
          </h1>
          <p className="mt-10 w-[20ch] cursor-default font-tthoves text-sm font-semibold tracking-tight text-[#e9e9e9] dark:text-[#282828] md:w-[20ch] md:text-base">
            Currently available for work and freelance projects
          </p>
        </div>
        <div className="mt-7 flex h-full flex-col md:mt-auto md:items-center md:justify-end md:pr-10">
          <FooterArrow />
          <a
            href="mailto: gustaf@gronlund.dev"
            className="relative z-50 cursor-pointer font-tthoves text-xl font-semibold tracking-tighter text-[#e9e9e9] dark:text-[#282828] md:mt-10 md:text-3xl"
          >
            gustaf@gronlund.dev
          </a>
        </div>
      </div>
      <div className="my-auto flex w-full flex-row justify-between font-tthoves tracking-tight md:my-20 md:max-w-screen-xl md:flex-row md:pl-10">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
          <ul className="flex w-full flex-col items-start gap-5 md:gap-5">
            <li className="flex cursor-pointer flex-row items-center justify-center gap-1 font-tthoves tracking-tight text-[#e9e9e9] dark:text-[#282828]">
              <Link
                href="https://www.linkedin.com/in/gustafgronlund/"
                target="_blank"
                className="relative z-50 flex items-center justify-center"
              >
                <span>
                  <FaLinkedin className="mr-1" />
                </span>
                LinkedIn
              </Link>
            </li>
            <li className="flex cursor-pointer flex-row items-center justify-center gap-1 font-tthoves tracking-tight text-[#e9e9e9] dark:text-[#282828]">
              <Link
                href="https://github.com/GustafGronlund"
                target="_blank"
                className="relative z-50 flex items-center justify-center"
              >
                <span>
                  <FaGithubSquare className="mr-1" />
                </span>
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between pb-5 md:max-w-screen-xl md:px-10">
        <p className="mt-auto cursor-default whitespace-nowrap font-tthoves text-xs font-semibold tracking-tight text-[#e9e9e9] dark:text-[#282828] md:pr-10">
          Developed by Gustaf Grönlund
        </p>
        <p className="mt-auto cursor-default font-tthoves text-xs font-semibold tracking-tighter text-[#e9e9e9] dark:text-[#282828]">
          © 2024
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
