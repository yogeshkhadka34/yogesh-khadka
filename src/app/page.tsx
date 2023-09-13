"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/components/modules/Hero";
import Stats from "@/components/modules/Stats";
import Skills from "@/components/modules/Skills";
import Projects from "@/components/modules/Projects";
import About from "@/components/modules/About";
import Contacts from "@/components/modules/Contacts";
import Experience from "@/components/modules/Experience";
import Education from "@/components/modules/Education";

export default function Home() {
  return (
    <main className="_container">
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contacts />
    </main>
  );
}
