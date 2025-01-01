import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import AboutMe from "@/app/_components/AboutMe";
import Experiences from "@/app/_components/Experiences";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import ContactMe from "@/app/_components/ContactMe";
import BackToTopButton from "@/app/_components/BackToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
      <BackToTopButton />
    </>
  );
}
