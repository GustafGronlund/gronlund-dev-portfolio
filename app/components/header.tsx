"use client";

import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 md:max-w-screen-xl bg-transparent md:bg-transparent h-15 flex flex-row justify-between w-full px-10 py-5">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-mono">GUSTAF GRÖNLUND</p>
        <div className="flex flex-row items-center">
          <span className="mr-1">
            <TfiWorld />
          </span>
          <p className="text-xs mr-3 font-mono">SWEDEN</p>
          <p className="text-xs font-mono">[15:17]</p>
        </div>
      </div>
      <Link
        href="https://www.linkedin.com/in/gustafgronlund/"
        rel="noopener noreferrer"
        target="_blank"
        className="hidden md:block">
        AVAILABLE FOR FULL TIME
      </Link>
      <p>TOGGLE</p>
    </header>
  );
}

export default Header;
