import React from "react";

const projects = [
  {
    name: "Library Management Website",
    description:
      "A complete web-based system to manage library books, subscriptions, and borrowing features.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase Authentication",
    ],
    link: "https://library-client-322cb.web.app/",
    image:
      "https://library-client-322cb.web.app/library_homepage_screenshot.png", // Replace with your actual screenshot
  },
  {
    name: "News Management Website",
    description:
      "A content management platform allowing admins to add, edit, and manage news articles with image uploads and subscription features.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Payment",
      "Firebase Authentication",
    ],
    link: "https://newspaper-client-be1ba.web.app/",
    image:
      "https://newspaper-client-be1ba.web.app/news_homepage_screenshot.png", // Replace with your actual screenshot
  },
];

const Project = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* ===== Section Title ===== */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-500 dark:text-blue-400">Projects</span>
        </h2>

        {/* ===== Projects Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200/40 dark:border-gray-700/40 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all"></div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 text-white flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-blue-500/20 border border-blue-400/40 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
