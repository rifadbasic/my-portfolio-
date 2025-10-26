import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-6 md:px-10 py-8 bg-transparent border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ===== Left Section ===== */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          
          {/* Animated Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
              rifadbasic
            </h1>
          </div>

          {/* About Me */}
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
            MERN Stack Developer passionate about building fast, scalable, and
            visually stunning web applications.
          </p>
        </div>

        {/* ===== Right Section (Social Links) ===== */}
        <div className="flex space-x-5 text-2xl">
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

      {/* ===== Bottom small text ===== */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} rifadbasic — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
