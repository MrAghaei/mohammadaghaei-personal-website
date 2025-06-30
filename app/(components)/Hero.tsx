"use client";
import { FaGithub, FaTelegram } from "react-icons/fa";
import ProfileCard from "@/src/blocks/Components/ProfileCard/ProfileCard";
import DecryptedText from "@/src/blocks/TextAnimations/DecryptedText/DecryptedText";

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-darkModeBlack dark:text-white h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20  sm:px-10 md:px-40 bg-gray-100">
      {/* Left Section - Image */}
      {/*<div data-aos-duration="1000" data-aos="fade-right" className="rounded">*/}
      {/*  <img*/}
      {/*    className="w-48 md:w-72 lg:w-96 rounded-full border-2 border-blue-900 shadow hover:shadow-2xl duration-300"*/}
      {/*    alt="M.Aghaei Photo"*/}
      {/*    src="/photo1.jpg"*/}
      {/*  />*/}
      {/*</div>*/}
      <ProfileCard
        behindGradient={"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}
        name="Mohammad Aghaei"
        title="Web Developer"
        handle="mamadaghaei"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/removedBG.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => scrollToSection("contact-me")}
      />
      {/* Right Section - Text and Buttons */}
      <div
        data-aos-duration="1000"
        data-aos="flip-left"
        className="flex flex-col items-center text-center gap-2"
      >
        {/*<p className="text-lg md:text-2xl">Hello,</p>*/}
        {/*<p className="text-lg md:text-2xl">I&#39;m Mohammad Aghaei</p>*/}
        {/*<p className="text-xl md:text-3xl font-bold">A Front-End Developer</p>*/}
        <DecryptedText
          animateOn={"view"}
          text="Hello,"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
        <DecryptedText
          animateOn={"view"}
          text="I&#39;m Mohammad Aghaei,"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
        <DecryptedText
          animateOn={"view"}
          text="A Web Developer"
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
        {/* Social Links */}
        <div className="flex items-center gap-5 mt-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MrAghaei"
            className="text-2xl md:text-3xl hover:text-blue-900 duration-300"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/Mamad_Aghaei"
            className="text-2xl md:text-3xl hover:text-blue-900 duration-300"
          >
            <FaTelegram />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-5 ">
          <a
            href="/MohammadAghaei-en-resume.pdf"
            download="MohammadAghaei-en-resume.pdf"
            className="flex items-center justify-center text-center bg-blue-900 text-white px-4 py-2 rounded-2xl hover:bg-blue-800 duration-300"
          >
            Download CV
          </a>

          <button
            onClick={() => scrollToSection("contact-me")}
            className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-2xl hover:bg-blue-100 duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
