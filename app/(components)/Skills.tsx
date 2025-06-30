import { FaCode } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Skills() {
  return (
    <div
      className="dark:bg-darkModeBlack dark:text-white bg-white
      py-20 min-h-screen flex flex-col items-center justify-center
      gap-10 md:gap-20 px-5 md:px-20 lg:px-40"
    >
      <h1 className="text-3xl md:text-5xl font-bold">My Skills</h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full max-w-6xl justify-center">
        {/* Front-end Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="group !transition-all duration-300 transform hover:scale-[1.02] border border-blue-300 dark:border-blue-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md rounded-2xl p-6 md:py-8 md:px-10 flex flex-col items-center gap-6 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-blue-300">
            Front-end
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-8 w-full">
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
                <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
                <div className="flex flex-col">
                  <p className="text-base md:text-lg font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div
          data-aos="fade-left"
          className="group !transition-all !duration-300 transform hover:scale-[1.02] border border-blue-300 dark:border-blue-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md rounded-2xl p-6 md:py-8 md:px-10 flex flex-col items-center gap-6 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-blue-300">
            Other
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-8 w-full">
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
                <MdVerified className="text-blue-600 dark:text-blue-400 text-xl" />
                <div className="flex flex-col">
                  <p className="text-base md:text-lg font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </p>
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
