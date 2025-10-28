import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import useAxios from "../hooks/useAxios";

const Contact = () => {
  const axiosSecure = useAxios();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const { data } = await axiosSecure.post("/contact", formData);
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Axios Error:", err);
      setStatus("❌ Server or Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-12 transition-colors duration-500"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-lg space-y-6 text-gray-800 dark:text-gray-200"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Why Contact Me?
        </h2>
        <p className="text-lg leading-relaxed">
          Whether you’re looking to collaborate, hire a developer, or just share ideas — 
          I’m always open to new opportunities and conversations. 🌱
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
          <li>Collaborate on exciting projects 💡</li>
          <li>Discuss freelance or job opportunities 💼</li>
          <li>Share creative thoughts or feedback 🧠</li>
          <li>Just say Salam 👋</li>
        </ul>

        <div className="mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            📍 Based in Khulna, Bangladesh  
            <br />
            💌 Email me directly:{" "}
            <a
              href="mailto:krifad02@gmail.com"
              className="text-indigo-500 hover:underline"
            >
              krifad02@gmail.com
            </a>
          </p>
        </div>
      </motion.div>

      {/* Right Section (Form) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-500">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex justify-center items-center gap-2 px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={18} />}
          </button>

          {status && (
            <p
              className={`text-center mt-3 font-medium text-sm ${
                status.startsWith("✅") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
