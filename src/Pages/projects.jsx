import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Tailwind CSS, and Framer Motion.",
    image: "https://source.unsplash.com/500x300/?technology,website",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with payment integration.",
    image: "https://source.unsplash.com/500x300/?shopping,app",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A clean, minimal blog platform with a markdown editor.",
    image: "https://source.unsplash.com/500x300/?writing,blog",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A task management app with drag-and-drop functionality.",
    image: "https://source.unsplash.com/500x300/?productivity,task",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-800 to-black text-white py-16 px-6">
      
      {/* Title */}
      <motion.h2 
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Project Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 border border-4 border-purple-800 focus:border-purple-800 focus:ring-2 focus:ring-purple-900"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
              <p className="text-gray-300 text-md mt-2">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block mt-4 text-purple-400 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
