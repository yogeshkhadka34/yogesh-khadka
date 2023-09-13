import Image from "next/image";
import React from "react";
import yogesh from "../../assets/yogesh-khadka.jpeg";

const About = () => {
  return (
    <section className="px-32 mt-24">
      <div className="_headings">About</div>

      <div className="flex gap-8 justify-between mt-16 items-center">
        {/* Biography Section */}
        <div className="flex-[0.7]">
          <h1 className="text-gray text-[1.1rem] uppercase py-4 dark:text-cream">
            Biography
          </h1>
          <p className="text-gray text-justify dark:text-cream">
            Passionate about learning and development, with the desire to learn
            Frontend Development skills and apply them, adding value to the
            firm. As I studied Electronics and Communication Engineering at the
            Institute of Engineering, Thapathali Campus, I am eager to use my
            skills in results-driven learning, understanding emerging frontend
            technologies and using them for efficient and secured coding,
            solving problems, and collaborating.
            {/* Break */}
            <br />
            <br />I have always been fascinated by the intersection of design
            and technology. As a frontend developer, I aim to create visually
            appealing and user-friendly websites that not only look great but
            also provide an exceptional user experience. I am constantly
            learning and experimenting to stay up-to-date with the latest
            industry trends and best practices.
            <br /> <br />
            I'm always open to new opportunities and collaborations. Whether you
            have a project idea, want to discuss web development, or just want
            to say hi, feel free to reach out to me.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-[0.3] ml-16 border-[1px] border-gray relative bg-light dark:bg-gray rounded-lg h-[16rem] w-[16rem]">
          <Image src={yogesh} alt="yogesh khadka" className="p-8" />
          <div className="bg-gray h-[101%] w-[101%] absolute -bottom-1 -right-1 -z-10 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
