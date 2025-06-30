function Experiences() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white min-h-screen w-full flex flex-col items-center justify-center gap-10 py-20 md:gap-20 px-5 md:px-20 lg:px-60 bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold">My Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {[
          {
            title: "Content Manager & Graphic Designer",
            company: "www.curlfans.com.au · Full-time",
            duration: "May 2021 - Jan 2022 · 9 months",
          },
          {
            title: "Indie Game Developer",
            company: "52 Hertz Mind · Self-employed",
            duration: "Jul 2019 - Jul 2023 · 4 years & 1 months",
          },
          {
            title: "Game Designer",
            company: "Nouranium · Full-time",
            duration: "Jan 2022 - Mar 2023 · 1 year & 3 months",
          },
          {
            title: "Customer Service Administrator",
            company: "Dirclub.ir · Full-time",
            duration: "Oct 2023 - Jan 2024 · 4 months",
          },
          {
            title: "Book Seller",
            company: "Cheshmeh Publication · Full-time",
            duration: "Apr 2024 - Oct 2024 · 7 months",
          },
          {
            title: "Front-end Learning",
            company: "Full-time",
            duration: "July 2023 - Present",
          },
        ].map((experience, index) => (
          <div
            key={index}
            data-aos="flip-down"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
            className="group !transition-all !duration-300 transform hover:scale-[1.02] border border-blue-300 dark:border-blue-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md rounded-2xl p-5 flex flex-col gap-2"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 opacity-80">
              {experience.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
