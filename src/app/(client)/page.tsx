"use client";

import { useTheme } from "next-themes";
import dark_hero from "@/assets/dark_hero.png";
import light_hero from "@/assets/light_hero.png";
import Image from "next/image";

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hero bg-light_secondary dark:bg-dark_bg px-5 flex justify-between">
      <div className="container mx-auto flex py-5 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="md:text-5xl text-3xl mb-2 capitalize text-light_primary dark:text-dark_primary">
            “Online education is like a rising tide, it’s going to lift all
            boats.”
          </h1>
          <p className="mb-8 leading-relaxed ml-5 italic text-lg">
            – Anant Agarwal
          </p>
          <p className="mb-4 leading-relaxed">
            Since 2020, we have launched 30+ courses about technology field.
            More then 20k+ trust us and give positive feedback. Find your desire
            courses from them.
          </p>
          <div className="flex md:flex-row flex-col gap-2 mb-4 w-full md:justify-start justify-end md:items-end">
            <div className="relative w-full">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-dark_text dark:text-dark_bg rounded border border-light_primary dark:border-dark_primary focus:ring-2 focus:ring-light_primary dark:focus:ring-dark_primary focus:border-light_primary dark:focus:border-dark_primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-dark_text dark:text-dark_bg bg-light_primary dark:bg-dark_primary border-0 py-2 px-6  rounded text-lg hover:opacity-80 duration-300 w-1/2 mx-auto">
              Find Course
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {theme === "light" ? (
            // <img
            //   className="object-cover object-center rounded"
            //   alt="hero"
            //   src={dark_hero}
            // />
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={light_hero}
            />
          ) : (
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={dark_hero}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
