"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import DarkModeToggle from "@/app/_components/DarkModeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="dark:text-white dark:bg-gray-950 backdrop-blur-sm fixed w-screen bg-white bg-opacity-90 px-6 sm:px-10 md:px-40 py-4 z-50 overflow-hidden">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <p className="font-bold text-xl sm:text-2xl md:text-3xl">
          Mohammad Aghaei
        </p>

        {/* Menu Button (Visible on small screens) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none ml-4"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Hidden on small screens) */}
        <div className=" items-center hidden md:flex gap-8 text-lg md:text-2xl">
          <Link
            href="/blog"
            className="hover:bg-gray-200 rounded px-3 py-2 duration-300"
          >
            My Blog
          </Link>

          {["about-me", "experiences", "skills", "projects", "contact-me"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:bg-gray-200 rounded px-3 py-2 duration-300"
              >
                {section
                  .split("-")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ),
          )}

          <DarkModeToggle
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens when toggled) */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-start gap-3 text-lg">
          {["about-me", "experiences", "skills", "projects", "contact-me"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:bg-gray-200 rounded px-3 py-2 duration-300 w-full text-left"
              >
                {section
                  .split("-")
                  .map((word) => word[0].toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ),
          )}
          <DarkModeToggle
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
