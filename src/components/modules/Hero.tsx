import React from "react";
import HeroImage from "@/components/ui/HeroImage";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" lg:mt-4 md:mt-12 lg:h-[calc(65vh)] xl:h-[74vh] 2xl:h-[unset] portrait:h-[unset] py-4 flex justify-between gap-12 items-center ">
      {/* Left Image Section */}
      <div className="flex-1 mr-12">
        <HeroImage />
      </div>

      {/* Right Image  Section */}
      <div className="flex-1">
        <h1 className="text-[2.3rem] md:text-[1.8rem] xl:text-[2.5rem] text-gray dark:text-light font-[400] font-secondary">
          Hi, I'm{" "}
          <span className="font-[700] font-secondary">Yogesh Khadka</span>
        </h1>
        <p className="mt-1 font-bold font-secondary text-[#536DFE] text-[1.2rem] md:text-[1rem] lg:text-[1.2rem]">
          Frontend Developer
        </p>
        <p className="mt-6 font-secondary text-gray dark:text-cream lg:max-w-[32rem]">
          A passionate beginner frontend developer eager to explore the world of
          web development. This is my digital playground where I showcase my
          journey, projects, and skills as I embark on this exciting career
          path.
        </p>

        {/* Buttons */}
        <div className="mt-8 py-4 ">
          <Link
            href="?resume=1#contacts"
            className="px-6 py-2 mr-4 rounded-sm bg-gray dark:bg-white text-white dark:text-gray hover:bg-dark dark:hover:bg-cream"
          >
            Resume
          </Link>
          <Link
            href="?resume=0#contacts"
            className="mx-2 dark:text-white text-gray  hover:underline duration-1000"
          >
            Contacts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// ion:share-outline
