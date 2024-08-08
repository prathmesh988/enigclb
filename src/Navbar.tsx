import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            className={`fixed top-0 left-0 w-full ${isSidebarOpen ? "hidden" : "block"} transition-colors duration-300 z-50`}
            initial={{ backgroundColor: "transparent" }}
            animate={{ backgroundColor: "#1F2937" }}
            exit={{ backgroundColor: "transparent" }}
          >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="text-2xl font-extrabold text-white">Enigma</div>
              <div className="hidden md:flex space-x-8">
                <a href="#aboutus" className="text-white hover:text-gray-300 transition-colors duration-200">
                  About Club
                </a>
                <a href="#timeline" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Timeline
                </a>
                <a href="#contactus" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Join Us
                </a>

              </div>
              <div className="md:hidden">
                <button onClick={toggleSidebar} className="text-white">
                  <FiMenu size={28} />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 w-[100vw] h-full shadow-lg flex flex-col space-y-4 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-white">Menu</div>
                <button onClick={toggleSidebar} className="text-white">
                  <FiX size={28} />
                </button>
              </div>
              <motion.div
                className="flex flex-col space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.a
                  href="#about"
                  className="text-white text-lg"
                  onClick={() => setIsSidebarOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  About Club
                </motion.a>
                <motion.a
                  href="#page2"
                  className="text-white text-lg"
                  onClick={() => setIsSidebarOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  Page 2
                </motion.a>
                <motion.a
                  href="#page3"
                  className="text-white text-lg"
                  onClick={() => setIsSidebarOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  Page 3
                </motion.a>
                <motion.a
                  href="#connect"
                  className="text-white text-lg"
                  onClick={() => setIsSidebarOpen(false)}
                  whileHover={{ scale: 1.05 }}
                >
                  Connect
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
