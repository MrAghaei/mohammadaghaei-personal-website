"use client";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomThreshold = document.documentElement.scrollHeight;

    setIsVisible(scrollPosition >= bottomThreshold - 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        data-aos={`${isVisible ? "fade-up" : "fade-down"}`}
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 px-5 py-2 bg-gray-100 shadow-lg rounded-2xl
      hover:shadow-xl text-2xl xl:text-5xl duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTopButton;
