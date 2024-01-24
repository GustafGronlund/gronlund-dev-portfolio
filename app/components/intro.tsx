import React from "react";
import me from "@/public/me.jpeg";
import Image from "next/image";
import Btn from "./btn";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="flex flex-col justify-between w-screen h-[83dvh] px-10 md:max-w-screen-xl md:justify-center md:flex-row md:items-center md:h-screen">
      <div className="mb-10 md:w-full">
        <h1 className="text-4xl font-grotesk text-[#282828] font-light md:text-7xl">
          GUSTAF
        </h1>
        <h1 className="text-4xl font-grotesk text-[#282828] font-light md:text-7xl">
          GRÖNLUND
        </h1>
        <h1 className="text-base py-3 font-mono text-[#282828]">
          FRONT-END DEVELOPER
        </h1>
        <div className="py-5">
          <Btn text="gustaf@gronlund.dev" className="" onClick={() => {}} />
          <div className="flex flex-row py-5 gap-5">
            <FaGithub className="scale-150 cursor-pointer" />
            <FaLinkedin className="scale-150 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={me}
          alt="Picture of me"
          className="w-4/4 h-auto object-center shadow-md"
        />
      </div>
    </section>
  );
};

export default Intro;
