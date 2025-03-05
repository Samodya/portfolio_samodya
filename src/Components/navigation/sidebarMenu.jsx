import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (id) => {
    handleScrollTo(id);
    setMenuOpen(false);
  };

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div>
      {/* Overlay when menu is open */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-80 z-30 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Navbar (Sliding from left) */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-primary text-white z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center pt-20 space-y-8"
        >
          <ul className="list-none space-y-16">
            <li>
              <button
                className="text-white text-xl font-semibold hover:text-gray-300"
                onClick={() => closeMenu("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="text-white text-xl font-semibold hover:text-gray-300"
                onClick={() => closeMenu("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-white text-xl font-semibold hover:text-gray-300"
                onClick={() => closeMenu("services")}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className="text-white text-xl font-semibold hover:text-gray-300"
                onClick={() => closeMenu("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="text-white text-xl font-semibold hover:text-gray-300"
                onClick={() => closeMenu("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-6 right-6 text-white z-50"
        onClick={handleToggleMenu}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
}
