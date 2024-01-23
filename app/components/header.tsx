"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PiPackage } from "react-icons/pi";

function Header() {
  return (
    <header className="sticky top-0 bg-transparent md:bg-transparent h-15 flex flex-row justify-between w-full px-10 py-5">
      <div className="flex flex-col">
        <p className="text-xs">GUSTAF GRÖNLUND</p>
        <p className="text-xs">CMT+6 (10:33 PM, SWE)</p>
      </div>
      <p>TOGGLE</p>
    </header>
  );
}

export default Header;
