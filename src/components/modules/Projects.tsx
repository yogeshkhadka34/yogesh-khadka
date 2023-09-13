import Image from "next/image";
import { Icon } from "@iconify/react";
import manage from "../../assets/projects/manage.PNG";
import loksewa from "../../assets/projects/loksewa.PNG";
import hoobank from "../../assets/projects/hoobank.PNG";
import portfolio from "../../assets/projects/Portfolio.PNG";
import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mt-24 px-32">
      <h1 className="_headings">Projects</h1>
      <div className="mt-16" />
      {/* Project Components rendering */}
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative my-16 bg-light flex flex-row-reverse justify-between gap-8 items-center mt-8 px-8 py-8 border-[1px] border-gray rounded-lg"
        >
          <div className="absolute h-[101%] w-[100%] bg-gray -z-10 -right-1 -bottom-1 rounded-lg" />
          {/* Left Image component */}
          <Link
            href={project.url}
            className="flex-[0.4] bg-white shadow-xl drop-shadow-xl"
            target="_blank"
          >
            <Image src={project.img} alt={project.name} />
          </Link>
          {/* Right Image component */}
          <div className="flex-[0.6] flex flex-col gap-8 ">
            <div className="flex flex-col gap-1">
              <Link
                href={project.url}
                className="text-[1.2rem] text-gray font-semibold hover:underline "
              >
                {project.name}
              </Link>
              <p className="italic text-[0.9rem] text-[#585858] rounded-full">
                {project.tags}
              </p>
              <p className="text-gray">{project.desc}</p>
            </div>

            <div>
              <Link href={project.code ? project.github : "/"} target="_blank">
                <p className="flex gap-2 items-center py-1 max-w-[9rem] rounded-sm hover:text-primary">
                  <Icon
                    icon="bi:github"
                    className="h-[1.5rem] w-[1.5rem] text-dark"
                  />
                  <span className="text-dark font-medium hover:underline text-[0.9rem]">
                    {project.code ? "Watch Code" : "Request Access"}
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const projects = [
  {
    id: 3,
    code: 0,
    name: "Hoo Bank",
    url: "https://yogesh-bank.netlify.app/",
    img: hoobank,
    tags: "NextJS , Typescript, Tailwind CSS, Mobile first-Responsive Design",
    desc: "The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
  },
  {
    id: 1,
    code: 1,
    github: "https://github.com/yogeshkhadka34/manage/tree/master ",
    name: "Manage",
    url: "https://yogesh-manage.netlify.app/",
    img: manage,
    tags: "React , Tailwind CSS, Mobile first-Responsive Design",
    desc: "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
  },
  {
    id: 4,
    code: 0,
    name: "Yogesh Khadka Portfolio",
    url: "https://yogesh-khadka.netlify.app/",
    img: portfolio,
    tags: "NextJS , Typescript, Tailwind CSS, Mobile first-Responsive Design",
    desc: "A passionate beginner frontend developer eager to explore the world of web devs. This is my digital playground where I showcase my journey, projects, and skills as I embark on this exciting career path.",
  },
  {
    id: 2,
    code: 1,
    github: "https://github.com/yogeshkhadka34/loksewa.git",
    name: "Loksewa Smart Study",
    url: " https://yogesh-loksewa.netlify.app/ ",
    img: loksewa,
    tags: "Next.js , CSS Modules, Responsive Design",
    desc: "A complete digital platform for your aspirations",
  },
];

export default Projects;
