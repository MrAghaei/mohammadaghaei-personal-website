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
            title: "Frontend Developer",
            company: "Bytepute · Full-time",
            duration: "Aug 2024 - Jan 2025 · 6 months",
          },
        ].map((experience, index) => (
          <div
            key={index}
            data-aos="flip-down"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
            className="shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 flex flex-col items-start justify-center gap-2 border border-blue-900 rounded-2xl p-5"
          >
            <h3 className="text-xl md:text-2xl font-bold">
              {experience.title}
            </h3>
            <p>{experience.company}</p>
            <p className="opacity-80 text-sm">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
