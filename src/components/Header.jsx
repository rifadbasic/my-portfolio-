import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ArrowDownCircle } from "lucide-react";
import ProfileCard from "./portfolioCard/ProfileCard";

const Header = () => {
  return (
    <header className="w-full mt-20 mb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* ===== Left Section ===== */}
        <div className="flex-1 text-center md:text-left">
          {/* --- Name & Info --- */}
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

          {/* ===== Social Links + Resume ===== */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
            {/* --- Follow Me Section --- */}
            <div className="flex flex-col items-center md:items-start">
              <span className="uppercase text-sm font-semibold tracking-widest text-sky-500 mb-3">
                Follow Me
              </span>
              <div className="flex justify-between">
                <div className="flex space-x-5 text-xl">
                  {/* === GitHub === */}
                  <a
                    href="https://github.com/rifadbasic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500  hover:bg-clip-text hover:shadow-[0_0_12px_rgba(56,189,248,0.6)] animate-gradient-x"
                  >
                    <FaGithub />
                  </a>

                  {/* === LinkedIn === */}
                  <a
                    href="https://www.linkedin.com/in/rifadbasic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500  hover:bg-clip-text hover:shadow-[0_0_12px_rgba(56,189,248,0.6)] animate-gradient-x"
                  >
                    <FaLinkedin />
                  </a>

                  {/* === Facebook === */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500  hover:bg-clip-text hover:shadow-[0_0_12px_rgba(236,72,153,0.6)] animate-gradient-x"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className="mx-4">
                  {/* --- Resume Button --- */}
                  <a
                    href="/public/Khan-Rifad-Hossain.pdf"
                    download
                    className="flex items-center gap-2 px-5 py-2 font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 transition-all shadow-lg"
                  >
                    Resume
                    <ArrowDownCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
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
