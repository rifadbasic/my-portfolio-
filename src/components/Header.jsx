import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import ProfileCard from "./portfolioCard/ProfileCard";

const Header = () => {
  return (
    <header className="w-full mt-20 mb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        
        {/* ===== Left Section (Text & Social) ===== */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Khan Rifad Hossain
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Front-End Developer | Web Developer | MERN Stack Developer
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0">
            Passionate about crafting modern, responsive web applications with
            clean code, smooth animations, and beautiful UI/UX experiences.
          </p>

          {/* ===== Social Links ===== */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6 text-2xl">
            <a
              href="https://github.com/rifadbasic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rifadbasic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* ===== Right Section (ProfileCard) ===== */}
        <div className="flex-1 flex justify-center md:justify-end">
          <ProfileCard />
        </div>
      </div>
    </header>
  );
};

export default Header;
