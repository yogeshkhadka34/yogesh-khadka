"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [theme, setTheme] = React.useState("Light");

  const handleToggle = (theme: string) => {
    if (theme === "Light") {
      setTheme("Dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("Light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <header className="_container mt-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center  bg-light dark:bg-dark  text-gray dark:text-white">
      {/* Navigation */}
      <nav className="flex gap-6 text-[0.95rem] font-base">
        {navLinks.map((link) => (
          <Link key={link.id} href={`#${link.id}`} className="relative ">
            <p className="after:content-[' '] after:bg-gray dark:after:bg-white after:h-[2px] after:w-[0%] after:absolute after:left-0 after:-bottom-1 after:duration-300 after:hover:w-[100%]">
              {link.name}
            </p>
          </Link>
        ))}
      </nav>

      {/* Logo */}
      <Link
        href="/#home"
        className="cursor-pointer rounded-full p-2 bg-gray hover:bg-black text-white dark:bg-white dark:text-gray dark:border-1 border-black"
      >
        <h1 className="font-bold text-[1.5rem]">YK</h1>
      </Link>

      {/* Social Icons */}
      <nav className="flex gap-6 items-center">
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon.name}
            style={{ height: "1.5rem", width: "1.5rem" }}
            className="dark:text-white"
          />
        ))}

        {/* Theme Section */}
        {theme === "Light" ? (
          <button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleToggle(theme)
            }
          >
            <Icon
              icon="entypo:light-up"
              style={{ height: "2rem", width: "2rem" }}
            />
          </button>
        ) : (
          <button
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleToggle(theme)
            }
          >
            <Icon
              icon="ic:round-dark-mode"
              style={{ height: "2rem", width: "2rem" }}
            />
          </button>
        )}

        {/* entypo:light-up  ic:round-dark-mode */}
      </nav>
    </header>
  );
};

const navLinks = [
  { id: "home", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "about", name: "About" },
  { id: "contacts", name: "Contacts" },
];

const icons = [
  { id: "lilnkedIn", name: "skill-icons:linkedin" },
  { id: "github", name: "bi:github" },
  { id: "whatsApp", name: "logos:whatsapp-icon" },
  { id: "gmail", name: "logos:google-gmail" },
];

export default Navbar;
