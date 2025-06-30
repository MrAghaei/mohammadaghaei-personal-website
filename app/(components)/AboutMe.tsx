import { FaCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white bg-white min-h-screen w-full py-20 px-5 md:px-20 lg:px-48 flex flex-col items-center justify-center gap-14">
      <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* Timeline Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 border border-blue-300 dark:border-blue-800 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md !transition-all duration-300"
        >
          <ul className="flex flex-col gap-5">
            {[
              "Started programming with Java, sparking my interest in development.",
              "Learned game development using Unity and Unreal Engine.",
              "Worked 1.5 years as a game designer at a game studio.",
              "Transitioned to front-end development in 2023.",
              "Currently working on portfolio projects with my own team.",
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <FaCircle className="mt-1 text-blue-600 dark:text-blue-400 text-sm" />
                <p className="text-sm md:text-base font-medium text-gray-800 dark:text-white">
                  {step}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Description Section */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 text-justify text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p>
            My journey in development began with Java, which sparked a deep
            interest in programming. I ventured into game development with Unity
            and Unreal Engine, eventually working as a game designer at a studio
            for 1.5 years. In 2023, I transitioned into front-end development,
            where I now combine design and code to build intuitive, engaging
            user interfaces. I’m currently focused on portfolio projects with my
            team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
