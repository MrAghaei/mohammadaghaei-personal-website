function Projects() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20 px-5 md:px-20 lg:px-40 bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold">My Projects</h1>
      <div
        data-aos-duration="1000"
        data-aos="zoom-in"
        className="shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 flex flex-col justify-between items-center gap-5 border border-blue-900 p-5 rounded-2xl w-full sm:w-3/4 md:w-1/2"
      >
        <img
          alt="kheradkhan"
          src="/kheradkhan.png"
          className="w-full h-auto rounded-2xl"
        />
        <a
          href="https://github.com/52-Hertz-Mind/KheradKhan"
          target="_blank"
          className="text-center bg-blue-900 w-full sm:w-1/2 text-white p-3 rounded-2xl mt-5 hover:bg-blue-800 duration-300"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default Projects;
