import { FaCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white h-screen w-full bg-white flex flex-col justify-center gap-10 md:gap-20 items-center px-5 md:px-20 lg:px-48">
      <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Timeline Section */}
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="shadow-xl hover:shadow-2xl hover:transition-shadow hover:duration-300 flex flex-col items-start justify-center border border-blue-900 rounded-2xl py-5 px-5 md:px-10 gap-5 font-bold w-full lg:w-1/2"
        >
          <div className="flex items-center gap-4">
            <FaCircle />
            <p>
              Started programming with Java, sparking my interest in
              development.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaCircle />
            <p>Learned game development using Unity and Unreal Engine.</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCircle />
            <p>Worked 1.5 years as a game designer at a game studio.</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCircle />
            <p>Transitioned to front-end development in 2023.</p>
          </div>
          <div className="flex items-center gap-4">
            <FaCircle />
            <p>Currently a junior front-end developer at Bytepute.</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-justify w-full lg:w-1/2">
          <p className="text-sm md:text-lg">
            My journey in development started with learning Java, which sparked
            my interest in programming. I explored game development with Unity
            and Unreal Engine, eventually working as a game designer at a game
            studio for 1.5 years. In 2023, I decided to shift my focus to
            front-end development, where I combine my background in design and
            coding to create intuitive and engaging web experiences. I&#39;m
            currently working at Bytepute as a junior front-end developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
