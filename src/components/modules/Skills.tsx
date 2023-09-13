import React from "react";
import SkillsLottie from "../ui/SkillsLottie";

interface SkillsProps {
  id: number;
  name: string;
}

const Skills = () => {
  return (
    <section className="mt-24 py-4">
      <h1 className="_headings">Skills</h1>
      {/* Sills components */}
      <div className="mt-12 py-4 flex flex-wrap gap-12 justify-center items-center">
        {skills.map((skill) => (
          <h1
            key={skill.id}
            className=" bg-gray text-white text-[1.1rem] px-6 py-2 rounded-full font-medium hover:bg-dark"
          >
            {/*border-[1px] border-gray w-[18rem] relative text-center px-8 py-4 text-[1.2rem]  text-gray dark:text-white bg-white dark:bg-gray rounded-lg           w-[101%] h-[108%] absolute -right-1 -bottom-1 bg-gray -z-10 rounded-[0.7rem] */}{" "}
            {skill.name}
            {/* <div className="" /> */}
          </h1>
        ))}{" "}
      </div>
      {/* <div className="h-[5rem]">
        <SkillsLottie />
      </div> */}
    </section>
  );
};

const skills = [
  { id: 1, name: "HTML & CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "React" },
  { id: 4, name: "Next.js" },
  { id: 5, name: "Tailwind CSS" },
  { id: 6, name: "Material UI" },
  { id: 7, name: "Responsive Design" },
  { id: 8, name: "Git & Github" },
];

export default Skills;
