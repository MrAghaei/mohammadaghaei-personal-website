'use client'
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import AboutMe from "@/app/_components/AboutMe";
import Experiences from "@/app/_components/Experiences";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import ContactMe from "@/app/_components/ContactMe";
import AOS from "aos";
import {useEffect} from "react";


export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
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
      </>
  );
}
