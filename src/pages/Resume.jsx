import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router";
import profileImg from "../assets/profileImg.jpg"; // 🖼️ Place your image here

const Resume = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black py-20 px-6 md:px-10">
      
      {/* ===== Home Button ===== */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 p-3 rounded-full border border-gray-300/40 dark:border-gray-700/40 backdrop-blur-lg bg-white/30 dark:bg-black/40 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500 group"
      >
        <Home
          size={22}
          className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
        />
      </button>

      {/* ===== Resume Card ===== */}
      <div className="max-w-5xl mx-auto border border-gray-300/30 dark:border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-lg bg-white/40 dark:bg-black/30 shadow-2xl transition-all duration-500 mt-20">
        
        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={profileImg}
            alt="Khan Rifad Hossain"
            className="w-40 h-40 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 p-[2px] shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              Khan Rifad Hossain
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              MERN Stack Web Developer
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              📍 Rohimabad, Mograhat-9300, Bagerhat Sadar, Bagerhat <br />
              📞 01834513325 | ✉ krifad02@gmail.com
            </p>
            <div className="flex justify-center md:justify-start mt-3 space-x-4">
              <a
                href="https://github.com/rifadbasic"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-indigo-500 hover:text-pink-500 transition font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rifadbasic/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-indigo-500 hover:text-pink-500 transition font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="my-8 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 rounded-full" />

        {/* ===== Career Objective ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Career Objective
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate MERN Stack Developer skilled in building responsive,
            scalable, and user-focused web applications. I’m eager to contribute
            my creativity, problem-solving, and technical expertise to
            innovative projects that make an impact.
          </p>
        </div>

        {/* ===== Education ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              🎓 <b>Diploma in Engineering (Computer Technology)</b> — Khulna
              Polytechnic Institute, BTEB — Running (2025)
            </li>
            <li>
              🎓 <b>SSC (Madrasah)</b> — Darul Quran Siddikia Kamil Madrashah,
              Khulna — GPA 5.00 (2021)
            </li>
            <li>
              🎓 <b>JSC (Madrasah)</b> — Shat Gombuj Baitus-Sharaf Adorso Alim
              Madrashah — GPA 4.33 (2018)
            </li>
          </ul>
        </div>

        {/* ===== Experience ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Work Experience / Internship
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              💼 <b>Web Development (PHP Laravel)</b> — Cloud Institute (Jan
              2023 – May 2023)
              <br />
              <span className="text-sm text-gray-500">
                Built user-friendly UI and managed databases using Laravel
                framework.
              </span>
            </li>
            <li>
              💼 <b>Arduino Internship</b> — Gobeshona Learning Academy (Dec
              2024)
              <br />
              <span className="text-sm text-gray-500">
                Designed, programmed, and tested Arduino-based projects in C++.
              </span>
            </li>
          </ul>
        </div>

        {/* ===== Technical Skills ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside space-y-1">
              <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>PHP Laravel Development</li>
              <li>REST API Integration & Firebase Auth</li>
              <li>Tailwind CSS, React Router, TanStack Query</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Microcontroller Programming (Arduino, C++)</li>
              <li>Git, GitHub, VS Code, Postman</li>
              <li>MS Office (Word, Excel, PowerPoint)</li>
            </ul>
          </div>
        </div>

        {/* ===== Projects ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              🧠 <b>Library Management Website</b> — Manage library system with
              book borrow, add, and subscription features. <br />
              <span className="text-sm text-gray-500">
                Tech: React, Tailwind, Node.js, Express.js, MongoDB, Firebase{" "}
              </span>
              <a
                href="https://library-client-322cb.web.app/"
                target="_blank"
                rel="noreferrer"
                className="block mt-1 text-indigo-500 hover:text-pink-500"
              >
                🔗 Visit Project
              </a>
            </li>
            <li>
              📰 <b>News Management Website</b> — Admin dashboard, multi-image
              upload, Stripe payments.
              <br />
              <span className="text-sm text-gray-500">
                Tech: React, TanStack Query, Node.js, Express.js, MongoDB,
                Firebase
              </span>
              <a
                href="https://newspaper-client-be1ba.web.app/"
                target="_blank"
                rel="noreferrer"
                className="block mt-1 text-indigo-500 hover:text-pink-500"
              >
                🔗 Visit Project
              </a>
            </li>
            <li>
              ⚙️ <b>LCD Display Control</b> — Controlled LCD text using Arduino
              UNO & C++.
            </li>
          </ul>
        </div>

        {/* ===== Achievements ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Completed 30-Day Arduino Internship at Gobeshona Academy</li>
            <li>Web Development (PHP Laravel) — Cloud Institute</li>
          </ul>
        </div>

        {/* ===== Languages ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Languages
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Bangla — Native • English — Fluent • Hindi — Comfortable
          </p>
        </div>

        {/* ===== References ===== */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            References
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              👤 <b>Susmita Kundu</b> — Chief Instructor, Dept. Head (CST),
              Khulna Polytechnic Institute <br />
              📞 +880 1770-902630
            </li>
            <li>
              👤 <b>Sobuj Rana</b> — Instructor, Dept. Head (CST), Khulna
              Polytechnic Institute <br />
              📞 +880 1723-980773
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
