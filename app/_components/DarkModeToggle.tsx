import React from "react";
interface DarkModeToggleProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}
function DarkModeToggle({ toggleDarkMode, isDarkMode }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-between bg-gray-200 dark:bg-gray-600 rounded-full w-20 h-10 p-1 transition-all duration-300 ease-in-out sm:w-16 sm:h-8"
    >
      <span className="absolute left-1 transition-all duration-300 ease-in-out text-sm sm:text-base">
        🌙
      </span>
      <span className="absolute right-1 transition-all duration-300 ease-in-out text-sm sm:text-base">
        ☀
      </span>
      <span
        className={`bg-white dark:bg-gray-800 w-8 h-8 rounded-full shadow-md transition-all duration-300 ease-in-out ${
          isDarkMode ? "translate-x-10 sm:translate-x-8" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
}

export default DarkModeToggle;
