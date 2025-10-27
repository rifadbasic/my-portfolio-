import { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, Link } from "react-router";
import { Sun, Moon, Send, Menu, X } from "lucide-react";
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
    const root = window.document.documentElement;
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

  const navLinks = [
    { name: "Project", path: "/project" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
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
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-500">
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

        {/* Desktop Nav (aligned to right) */}
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

          {/* Hire Me */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me <Send size={16} />
          </button>

          {/* Theme Toggle */}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 dark:bg-gray-900/60 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-3/5 max-w-xs h-full flex flex-col justify-center items-center gap-6 bg-black dark:bg-gray-900 p-8 shadow-2xl relative"
            >
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
                        "block text-2xl font-semibold text-center py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition",
                        isActive
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500"
                          : "text-gray-200",
                      ].join(" ")
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition mt-4"
                onClick={() => {
                  setMenuOpen(false);
                  window.location.href = "#contact";
                }}
              >
                Hire Me <Send size={18} />
              </motion.button>

              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition"
              >
                <X size={20} className="text-gray-200" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
