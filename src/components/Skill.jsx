import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiArduino,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS / Tailwind", icon: <SiTailwindcss /> },
    { name: "React Router", icon: <FaReact /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PHP Laravel", icon: <FaLaravel /> },
    { name: "REST API & Firebase Auth", icon: <SiFirebase /> },
  ],
  "Tools & Others": [
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Arduino / C++", icon: <SiArduino /> },
    { name: "MS Office", icon: <FaDatabase /> },
  ],
};

const Skill = () => {
  return (
    <section id="skills" className="w-full py-20 px-6 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-500 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.keys(skills).map((category, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                {category}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {skills[category].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-gray-300 dark:border-gray-600 cursor-pointer transition-all duration-500
                      hover:border-[3px] hover:border-gradient-animated"
                  >
                    <div className="text-5xl text-gray-700 dark:text-gray-200 hover:animate-spin-slow transition-all">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
