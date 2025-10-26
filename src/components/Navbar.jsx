import { useState, useEffect, useCallback } from "react";
import { NavLink , Link } from "react-router";
import { Sun, Moon, Send, Menu, X } from "lucide-react";

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
      /* ignore */
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Project", path: "/project" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-300/30 dark:border-gray-700/30 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* ===== Logo ===== */}
        <Link to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer select-none"
          aria-hidden="true"
        >
          rifadbasic
        </Link>

        {/* ===== Desktop Nav Links ===== */}
        <div className="hidden sm:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                [
                  "relative font-medium transition-all duration-300 px-1 py-1",
                  isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:rounded after:from-indigo-500 after:via-cyan-400 after:to-pink-500 after:bg-gradient-to-r"
                    : "text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500",
                ].join(" ")
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ===== Right Controls ===== */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-gray-300/40 dark:border-gray-600/40 hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-800 dark:text-gray-200" />
            )}
          </button>

          {/* Hire Me */}
          <button
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
            <Send size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-md border border-gray-300/40 dark:border-gray-600/40 hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={22} className="text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu size={22} className="text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-white/40 dark:bg-black/40 backdrop-blur-md border-t border-gray-300/30 dark:border-gray-700/30">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              end
              className={({ isActive }) =>
                [
                  "text-base font-medium transition-all",
                  isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-cyan-400 hover:to-pink-500",
                ].join(" ")
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
            <Send size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
