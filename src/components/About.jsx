import React from "react";
import CoderProfileCard from "./portfolioCard/CoderProfileCard";

const About = () => {
  const education = [
    {
      degree: "Diploma in Engineering (Computer Technology)",
      institute: "Khulna Polytechnic Institute, BTEB",
      year: "Running (2025)",
      gpa: null,
    },
    {
      degree: "SSC (Madrasah)",
      institute: "Darul Quran Siddikia Kamil Madrashah, Khulna",
      year: "2021",
      gpa: "5.00",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* ===== Left Section ===== */}
      <div className="flex-1 text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800 dark:text-white">
          About <span className="text-blue-500 dark:text-blue-400">Me</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Hi, I'm <span className="font-semibold">Khan Rifad Hossain</span> — a
          passionate{" "}
          <span className="text-blue-500 dark:text-blue-400">MERN Stack Developer</span> 
          focused on creating beautiful, functional, and responsive web applications.
          I love bringing ideas to life through code, exploring new technologies, 
          and writing clean, maintainable solutions.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          I specialize in building modern, user-friendly websites using 
          <span className="font-semibold text-blue-500 dark:text-blue-400"> React</span>,
          <span className="font-semibold text-blue-500 dark:text-blue-400"> Node.js</span>,
          and the <span className="font-semibold text-blue-500 dark:text-blue-400">MERN stack</span>.
          My goal is to deliver high-performance and scalable web experiences that
          provide real value to users.
        </p>

        {/* ===== Education Section ===== */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Education
          </h3>

          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200/30 dark:border-gray-700/30">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.institute}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {edu.year} {edu.gpa && ` — GPA: ${edu.gpa}`}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Right Section (Profile Card) ===== */}
      <div className="flex-1 flex justify-center md:justify-end">
        <CoderProfileCard />
      </div>
    </section>
  );
};

export default About;
