import Image from "@/components/common/StaticImage";

import React from "react";
import yogesh from "../../assets/yogeshabout.png";

const About = () => {
  return (
    <section id="about" className="_spacing">
      <div className="_headings">About</div>

      <div className="flex flex-col justify-center md:flex-row gap-8 md:justify-between mt-6 md:mt-16 items-center">
        {/* Biography Section */}
        <div className="flex-[0.7]">
          <h1 className="text-gray text-[1.1rem] uppercase py-4 dark:text-light">
            Biography
          </h1>
          <p className="text-gray text-justify dark:text-light">
            Passionate about the intersection of technology and education, I
            wear multiple hats as a Frontend Developer, Lecturer, and Digital
            Marketer. With a foundation in Electronics and Communication
            Engineering, I bring a unique perspective to web development and
            digital strategies. As a front-end developer, I craft user-friendly
            interfaces that marry aesthetics with functionality. My role as a
            Lecturer allows me to share my knowledge and inspire the next
            generation of tech enthusiasts.
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
        <div className="flex-[0.3] md:ml-16 border-[1px] border-gray relative bg-light dark:bg-gray rounded-lg h-[16rem] w-[16rem]">
          <Image
            src={yogesh}
            alt="yogesh khadka"
            unoptimized={true}
            className="absolute h-full w-full object-contain"
          />
          <div className="bg-gray h-[101%] w-[101%] absolute -bottom-1 -right-1 -z-10 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
