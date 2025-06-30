export interface ProjectCardModel {
  image: string;
  link: string;
  buttonText: string;
  title: string;
}

interface ProjectCardData {
  data: ProjectCardModel[];
}

function ProjectCard({ data }: ProjectCardData) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="group transition-all duration-300 transform hover:scale-[1.02] border border-blue-300 dark:border-blue-800 shadow-sm hover:shadow-md rounded-2xl p-5 flex flex-col justify-between items-center gap-4 bg-white dark:bg-slate-900"
        >
          <div className="w-full aspect-video overflow-hidden rounded-xl">
            <img
              alt={item.title}
              src={`/${item.image}.png`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100">
            {item.title}
          </h3>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300"
          >
            {item.buttonText}
          </a>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
