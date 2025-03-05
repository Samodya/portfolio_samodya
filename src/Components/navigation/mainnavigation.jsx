import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const MainNavigation = () =>  {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Close menu after clicking
      }
    };
  
    return (
      <>
       
        <motion.nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-transparent shadow-lg" : "bg-transparent"
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`max-w-7xl mx-auto flex justify-between items-center px-6 transition-all duration-300 ${
              scrolled ? "py-3 md:py-2" : "py-5 md:py-4"
            }`}
          >
            <h1 className="text-white text-xl font-bold">Samodya Nissanka </h1>
  
            
            <ul className="hidden md:flex space-x-6">
            <li><button className="text-white hover:text-gray-300" onClick={() => handleScrollTo("home")}>Home</button></li>
            <li><button className="text-white hover:text-gray-300" onClick={() => handleScrollTo("about")}>About</button></li>
            <li><button className="text-white hover:text-gray-300" onClick={() => handleScrollTo("services")}>Services</button></li>
            <li><button className="text-white hover:text-gray-300" onClick={() => handleScrollTo("projects")}>Projects</button></li>
            <li><button className="text-white hover:text-gray-300" onClick={() => handleScrollTo("contact")}>Contact</button></li>
            
          </ul>
  
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "" : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>
  
        {/* Sliding Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 text-white p-6 z-50 shadow-lg"
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} />
              </button>
  
              {/* Menu Items */}
              <ul className="mt-10 space-y-6 text-lg">
                <li><a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}
