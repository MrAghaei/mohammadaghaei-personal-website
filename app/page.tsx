import Header from "@/app/(components)/Header";
import Hero from "@/app/(components)/Hero";
import AboutMe from "@/app/(components)/AboutMe";
import Experiences from "@/app/(components)/Experiences";
import Skills from "@/app/(components)/Skills";
import Projects from "@/app/(components)/Projects";
import ContactMe from "@/app/(components)/ContactMe";
import BackToTopButton from "@/app/(components)/BackToTopButton";

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
