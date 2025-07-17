import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_a6a3n0o", "template_36oo0fe", formData, "aRjQC_41j4KvPASIS")
      .then((response) => {
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        alert("Error sending message!");
      });
  };

  return (
    <>
      <div
        id="contact"
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black p-6"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="relative w-full max-w-4xl bg-gray-900 text-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-300 mb-6">
              I'm open to collaborations and new projects. Feel free to reach
              out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" />
                <p className="text-gray-300">nsamodya@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" />
                <p className="text-gray-300">+94711042494</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-400" />
                <p className="text-gray-300">Matale, Sri Lanka</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
             
              <motion.a
                href="https://github.com/Samodya/"
                className="p-3 bg-bg-black text-white rounded-full hover:bg-blue-500 border border-rounded"
                whileHover={{ scale: 1.2 }}
              >
                <Github />
              </motion.a>
              
            </div>
          </div>

          <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Send a Message
            </h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              ></textarea>
              <motion.button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
