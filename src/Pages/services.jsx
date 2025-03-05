import { motion } from "framer-motion";
import { Code, Server, Database, Cpu } from "lucide-react";

export const ServicesPage = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building modern, scalable applications using Laravel, React, and Python.",
      icon: <Code className="text-blue-400 w-12 h-12" />,
    },
    {
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications with PHP, Laravel, python and Node.js & express.js.",
      icon: <Server className="text-green-400 w-12 h-12" />,
    },
    {
      title: "Database Management",
      description:
        "Designing efficient and scalable databases using MySQL, PostgreSQL, and MongoDB.",
      icon: <Database className="text-yellow-400 w-12 h-12" />,
    },
    {
      title: "AI & Automation",
      description:
        "Developing AI-powered and automated solutions using Python and Machine Learning.",
      icon: <Cpu className="text-purple-400 w-12 h-12" />,
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-16 px-6">
      
      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-4 flex items-start space-x-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <div>
              <h3 className="text-2xl font-semibold text-purple-300">{service.title}</h3>
              <p className="text-gray-300 text-md mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
