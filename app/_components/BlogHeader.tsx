"use client";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import DarkModeToggle from "@/app/_components/DarkModeToggle";
import { useEffect, useState } from "react";

function BlogHeader() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve theme from localStorage or fallback to checking the DOM
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        document.documentElement.classList.contains("dark")
      );
    } else {
      return false;
    }
  });
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="px-10 text-sm py-5 flex items-center justify-between sm:px-40 xl:px-60 xl:text-xl">
      <Link
        className="flex items-center gap-2 dark:hover:bg-gray-800 hover:bg-gray-200 rounded px-3 py-2 duration-300"
        href="/"
      >
        <FaLongArrowAltLeft />
        Back to portfolio
      </Link>
      <h1 className="text-sm font-bold xl:text-xl sm:text-2xl md:text-3xl">
        My Blog
      </h1>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default BlogHeader;
