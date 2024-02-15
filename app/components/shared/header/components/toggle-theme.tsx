"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`h-8 w-8 cursor-pointer rounded-full mix-blend-difference ${darkMode ? "bg-[#e9e9e9]" : "bg-[#282828]"}`}
      onClick={() => setDarkMode(!darkMode)}
    ></div>
  );
};

export default ToggleTheme;
