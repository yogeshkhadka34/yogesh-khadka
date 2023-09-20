"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [theme, setTheme] = React.useState("Light");
  const [mobileMenu, setMobileMenu] = React.useState(false);

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

  useEffect(() => {
    const theme = localStorage.theme;
    if (theme == "light") {
      setTheme("Light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("Dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="_container relative mt-4 py-2 flex  justify-between items-center  bg-light dark:bg-dark  text-gray dark:text-white">
      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-[0.95rem] font-base">
        {navLinks.map((link, i) => (
          <Link
            key={link.id + i}
            href={link.id == "/" ? "/" : `#${link.id}`}
            className="relative "
          >
            <p className="after:content-[' '] after:bg-gray dark:after:bg-white after:h-[2px] after:w-[0%] after:absolute after:left-0 after:-bottom-1 after:duration-300 after:hover:w-[100%]">
              {link.name}
            </p>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {/*  */}
      <button
        onClick={() => setMobileMenu((prev) => !prev)}
        className="block md:hidden"
      >
        {mobileMenu ? (
          <Icon
            icon="pajamas:close"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        ) : (
          <Icon
            icon="pajamas:hamburger"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        )}
      </button>

      {mobileMenu && (
        <nav className="absolute top-14 left-auto right-auto w-[90%] rounded-lg flex flex-col gap-3 justify-center items-center px-4 py-8 bg-cream">
          {navLinks.map((link, i) => (
            <Link key={link.id + i} href={link.id == "/" ? "/" : `#${link.id}`}>
              <p className="text-[1.1rem] text-gray-700 hover:text-gray  hover:font-semibold">
                {link.name}
              </p>
            </Link>
          ))}
        </nav>
      )}

      {/* Logo */}
      <Link
        href="/"
        className="flex items-center justify-center cursor-pointer rounded-full w-[3.25rem] h-[3.25rem] p-2 bg-gray hover:bg-black text-white dark:bg-white dark:text-gray dark:border-1 border-black"
      >
        <h1 className="font-bold text-[1.1rem] lg:text-[1.5rem]">YK</h1>
      </Link>

      {/* Social Icons */}
      <nav className="flex gap-10 items-center">
        <div className="hidden md:flex md:gap-6">
          {icons.map((icon, i) => (
            <Link href={icon.href} target="_blank" key={icon.id + 1}>
              {" "}
              <Icon
                icon={icon.name}
                style={{ height: "1.5rem", width: "1.5rem" }}
                className="dark:text-white"
              />
            </Link>
          ))}
        </div>
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
  { id: "/", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "about", name: "About" },
  { id: "contacts", name: "Contacts" },
];

const icons = [
  {
    id: "lilnkedIn",
    name: "skill-icons:linkedin",
    href: "https://www.linkedin.com/in/yogesh-khadka-208374146/",
  },
  {
    id: "github",
    name: "bi:github",
    href: "https://github.com/yogeshkhadka34",
  },
  {
    id: "whatsApp",
    name: "logos:whatsapp-icon",
    href: "	https://wa.me/9779825941683",
  },
  {
    id: "gmail",
    name: "logos:google-gmail",
    href: "mailto:razerkhadka@gmail.com",
  },
];

export default Navbar;
