import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-center px-6">
      
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="p-6 bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 rounded-full shadow-lg mb-6"
      >
        <AlertTriangle size={60} className="text-white" />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-7xl font-extrabold bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg mt-4 text-gray-700 dark:text-gray-300 max-w-md"
      >
        Oops... The page you’re looking for doesn’t exist.  
        Maybe it wandered off for some tea 🍵
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Home size={20} />
          Go Home
        </Link>
      </motion.div>

      {/* Subtle Blur Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 backdrop-blur-3xl opacity-30" />
    </div>
  );
}
