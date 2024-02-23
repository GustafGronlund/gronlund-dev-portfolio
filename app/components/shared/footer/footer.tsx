import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import FooterArrow from "./components/footer-arrow";

const Footer = () => {
  return (
    <footer className="flex h-dvh w-full flex-col justify-between bg-[#282828] px-10 pt-10 dark:bg-[#e9e9e9] md:h-fit md:items-center md:px-0 md:pt-0">
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
            className="cursor-pointer font-tthoves text-xl font-semibold tracking-tighter text-[#e9e9e9] dark:text-[#282828] md:mt-10 md:text-3xl"
          >
            gustaf@gronlund.dev
          </a>
        </div>
      </div>
      <div className="my-auto flex w-full flex-row justify-between font-tthoves tracking-tight md:my-20 md:max-w-screen-xl md:flex-row md:pl-10">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
          <ul className="flex w-full flex-col items-start gap-5 md:gap-5">
            <li className="flex cursor-pointer flex-row items-center justify-center gap-1 font-tthoves tracking-tight text-[#e9e9e9] dark:text-[#282828]">
              <span>
                <FaLinkedin />
              </span>
              LinkedIn
            </li>
            <li className="flex cursor-pointer flex-row items-center justify-center gap-1 font-tthoves tracking-tight text-[#e9e9e9] dark:text-[#282828]">
              <span>
                <FaGithubSquare />
              </span>
              GitHub
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
    </footer>
  );
};

export default Footer;
