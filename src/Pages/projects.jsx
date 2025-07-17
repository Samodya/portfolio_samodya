import { motion } from "framer-motion";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/lecturer_portal.png"
import image4 from "../assets/image3_hrm.png"
import image5 from "../assets/image4.png"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Vite, Tailwind CSS, and Framer Motion.",
    image: image1,
    link: "https://github.com/Samodya/portfolio_samodya",
  },
  {
    title: "Medical Center Mangent App",
    description: "A full-stack admin platform with Ability to monitor patiants and medical reports.",
    image: image2,
    link: "https://github.com/Samodya/portfolio_samodya",
  },
  {
    title: "Lecturer portal",
    description: "A clean, minimal Lecturer portal which allows lecturers update their lecturer coverges and monitor their payments froms institute.",
    image: image3,
    link: "https://github.com/Samodya/lec_pay_system",
  },
  {
    title: "HRM System",
    description: "A Human Resources Managment System, which handle employee attendance, leaves and other activity(under development).",
    image: image4,
    link: "https://github.com/Samodya/HRM-System",
  },
  {
    title: "todo App",
    description: "A task management app to maintain daily activities(under development).",
    image: image5,
    link: "https://github.com/Samodya/todo_full_stack",
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

      {/* Project Grid #1 */}
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
