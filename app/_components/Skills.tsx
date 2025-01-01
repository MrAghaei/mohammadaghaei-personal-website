import { FaCode } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Skills() {
  return (
    <div
      className="dark:bg-darkModeBlack dark:text-white bg-white
     py-20 min-h-screen flex flex-col items-center justify-center
      gap-10 md:gap-20 px-5 md:px-20 lg:px-40 "
    >
      <h1 className="text-3xl md:text-5xl font-bold">My Skills</h1>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full mx-auto justify-center">
        {/* Front-end Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="shadow-xl hover:!shadow-2xl hover:!transition-shadow
           hover:!duration-300 flex flex-col items-center justify-center
            gap-8 border border-blue-900 rounded-2xl p-5 md:py-5 md:px-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-600">Front-end</h2>
          <div className="grid grid-cols-1 px-10 xl:grid-cols-2 gap-5 md:gap-10">
            {[
              { name: "React", level: "Intermediate" },
              { name: "Next.js", level: "Intermediate" },
              { name: "JavaScript", level: "Intermediate" },
              { name: "TypeScript", level: "Intermediate" },
              { name: "HTML", level: "Experienced" },
              { name: "CSS", level: "Intermediate" },
              { name: "Tailwind", level: "Experienced" },
              { name: "SASS", level: "Intermediate" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-4">
                <FaCode className="min-w-5 text-xl xl:text-2xl" />
                <div className="flex flex-col items-start">
                  <p className="text-lg md:text-2xl font-bold">{skill.name}</p>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div
          data-aos="fade-left"
          className="shadow-xl hover:!shadow-2xl hover:!transition-shadow
           hover:!duration-300 flex flex-col items-center justify-center
            gap-8 border border-blue-900 rounded-2xl p-5 md:py-5 md:px-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-600">Other</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-10">
            {[
              { name: "Scrum", level: "Intermediate" },
              { name: "Agile Methodologies", level: "Intermediate" },
              { name: "Adobe Illustrator", level: "Intermediate" },
              { name: "Adobe Photoshop", level: "Intermediate" },
              { name: "Figma", level: "Intermediate" },
              { name: "Project Management", level: "Beginner" },
              { name: "Unity", level: "Intermediate" },
              { name: "Game Design", level: "Intermediate" },
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-4">
                <MdVerified className="min-w-5 text-xl xl:text-2xl" />
                <div className="flex flex-col items-start">
                  <p className="text-lg md:text-2xl font-bold">{skill.name}</p>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
