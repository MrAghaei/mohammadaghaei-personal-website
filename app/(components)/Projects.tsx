import ProjectCard, { ProjectCardModel } from "@/app/(components)/ProjectCard";

function Projects() {
  const ProjectsData: ProjectCardModel[] = [
    {
      image: "kheradkhan",
      link: "https://github.com/MrAghaei/kheradkhan-v2",
      buttonText: "Github Repo",
      title: "KheradKhan",
    },
    {
      image: "7host",
      link: "https://github.com/MrAghaei/7host-interveiw-task",
      buttonText: "Github Repo",
      title: "7Host Interview Project",
    },
    {
      image: "novindevtest",
      link: "https://github.com/MrAghaei/NovinDevTest",
      buttonText: "Github Repo",
      title: "NovinDev Interview Project",
    },
    {
      image: "medium-clone",
      link: "https://github.com/MrAghaei/medium-clone",
      buttonText: "Github Repo",
      title: "Medium Mock Project",
    },
  ];
  return (
    <div className="dark:bg-darkModeBlack dark:text-white min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20 px-5 md:px-20 lg:px-40 bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold mt-24">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center w-3/4 mb-24">
        <ProjectCard data={ProjectsData} />
      </div>
    </div>
  );
}

export default Projects;
