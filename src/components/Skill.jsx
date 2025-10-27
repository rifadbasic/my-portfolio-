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
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS / Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "React Router", icon: <FaReact className="text-sky-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <FaNodeJs className="text-green-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "PHP Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "REST API & Firebase Auth", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  "Tools & Others": [
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "VS Code", icon: <FaGithub className="text-gray-700 dark:text-gray-300" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Arduino / C++", icon: <SiArduino className="text-blue-500" /> },
    { name: "MS Office", icon: <FaDatabase className="text-yellow-600" /> },
  ],
};

const Skill = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 md:px-10 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Skills
          </span>
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.keys(skills).map((category, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-3xl border border-gray-300 dark:border-gray-600 shadow-lg backdrop-blur-md transition-all duration-700 hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                {category}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {skills[category].map((skill, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center gap-2 p-5 rounded-2xl border border-gray-300 dark:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_18px_rgba(56,189,248,0.4)]"
                  >
                    {/* Icon */}
                    <div className="text-5xl">{skill.icon}</div>

                    {/* Label */}
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>

                    {/* Subtle border glow */}
                    <span className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 opacity-20 blur-[10px] -z-10"></span>
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
