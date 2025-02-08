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
          className="shadow-xl hover:shadow-2xl transition-shadow !duration-300 flex flex-col justify-between items-center gap-5 border border-blue-900 p-5 rounded-2xl w-full"
        >
          <img
            alt={item.title}
            src={`/${item.image}.png`}
            className="w-full h-auto rounded-2xl"
          />
          <h3 className="text-xl font-medium text-center">{item.title}</h3>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-blue-900 w-full text-white p-3 rounded-2xl mt-5 hover:bg-blue-800 duration-300"
          >
            {item.buttonText}
          </a>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
