import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <div className="dark:bg-darkModeBlack dark:text-white bg-white min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20 px-5 md:px-20 lg:px-40">
      <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full md:w-auto">
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5 items-center text-center"
        >
          <div className="flex items-center gap-2">
            <FaTelegram className="text-3xl" />
            <a
              href="https://t.me/Mamad_Aghaei"
              target="_blank"
              className="text-lg hover:text-blue-800 duration-300"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5 items-center text-center"
        >
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-3xl" />
            <a
              href="https://www.linkedin.com/in/mohamad-aghaei-89894b196/"
              target="_blank"
              className="text-lg hover:text-blue-800 duration-300"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex flex-col shadow-xl hover:!shadow-2xl hover:!transition-shadow hover:!duration-300 border border-blue-900 rounded-2xl p-5 items-center text-center"
        >
          <div className="flex items-center gap-2">
            <MdEmail className="text-3xl" />
            <a
              href="mailto:mmdrezaaghaei@gmail.com"
              target="_blank"
              className="text-lg hover:text-blue-800 duration-300"
              rel="noopener noreferrer"
            >
              mmdrezaaghaei@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
