import { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, Link } from "react-router";
import { Sun, Moon, Send, Menu, X, FolderGit2, User, FileText, Mail, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    } catch {
      // ignore
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Navigation links with icons
  const navLinks = [
    { name: "Project", path: "/project", icon: <FolderGit2 size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={18} /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, type: "spring", stiffness: 100 },
    }),
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-cyan-400 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent select-none cursor-pointer"
        >
          <Link to="/">rifadbasic</Link>
        </motion.div>

        {/* Desktop Menu (no icons) */}
        <div className="hidden sm:flex items-center gap-8 font-medium text-lg ml-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                [
                  "relative transition-all duration-300 px-2 py-1 rounded-md",
                  isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500"
                    : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500",
                ].join(" ")
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me <Send size={16} />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className="text-gray-200" />
          ) : (
            <Menu size={24} className="text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-2/3 max-w-[280px]  text-white shadow-2xl flex flex-col justify-between p-4"
          >
            {/* Menu Links */}
            <div className="flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-2xl border border-gray-700/50 p-6 items-start gap-6 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="w-full"
                >
                  <NavLink
                    to={link.path}
                    end
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-3 text-lg font-semibold py-2 rounded-lg transition-all",
                        isActive
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500"
                          : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500",
                      ].join(" ")
                    }
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition mt-4"
                onClick={() => {
                  setMenuOpen(false);
                  window.location.href = "#contact";
                }}
              >
                Hire Me <Send size={18} />
              </motion.button>
            </div>

            {/* Close Button */}
            {/* <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition"
            >
              <X size={22} className="text-white" />
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
