import React from "react";
import { motion } from "framer-motion";
import profile from '../../assets/Samodya_img.jpg';
import resume from '../../assets/Samodya_Resume.pdf'; // <-- Import your PDF

const HeroSection = () => {

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white px-6"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center text-center md:text-left">
        
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="md:ml-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-purple-400">Samodya Nissanka</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-4">
            A Full-Stack Developer specialized in PHP, Laravel, MERN, and React.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 gap-4">
            <motion.button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3 bg-purple-500 text-white text-lg font-medium rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
            <motion.button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 bg-purple-500 text-white text-lg font-medium rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              My Work
            </motion.button>
            <motion.a
              href={resume}
              download="Samodya_Resume.pdf"
              className="px-6 py-3 bg-purple-500 text-white text-lg font-medium rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

