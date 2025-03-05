import { motion } from "framer-motion";

export const Aboutme = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-800 text-white flex flex-col items-center justify-center px-6"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            I am a passionate{" "}
            <span className="text-purple-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            specializing in PHP, Laravel, React, and Python. I love building
            modern, scalable, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Profile Picture & Bio Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="relative group">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-purple-500 shadow-lg transition-transform transform group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <p className="text-white text-lg font-semibold">
                Full-Stack Developer
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills & Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-semibold text-purple-400 mb-4">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I have expertise in backend technologies like{" "}
            <span className="text-purple-300 font-semibold">PHP, Laravel & Node.js</span>
            , frontend frameworks such as{" "}
            <span className="text-purple-300 font-semibold">React.js</span>, and
            programming in{" "}
            <span className="text-purple-300 font-semibold">Python</span>.
          </p>

          {/* Skills Animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              "PHP",
              "Laravel",
              "React",
              "Python",
              "Tailwind",
              "Node.js",
              "express.js",
              "Framer Motion",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-purple-700 text-white px-4 py-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
