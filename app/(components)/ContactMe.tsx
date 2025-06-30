import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  const contacts = [
    {
      label: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/Mamad_Aghaei",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohamad-aghaei-89894b196/",
    },
    {
      label: "Email",
      icon: <MdEmail />,
      link: "mailto:mmdrezaaghaei@gmail.com",
      display: "mmdrezaaghaei@gmail.com",
    },
  ];

  return (
    <div className="dark:bg-darkModeBlack dark:text-white bg-white min-h-screen flex flex-col items-center justify-center gap-16 px-5 md:px-20 lg:px-40 py-20">
      <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {contacts.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center p-6 border border-blue-300 dark:border-blue-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
              {item.icon}
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-medium text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 text-center break-words"
            >
              {item.display || item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
