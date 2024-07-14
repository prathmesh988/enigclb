import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // For the mobile menu icon
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      // if(lastScrollTop === 0) setIsScrolled(false);
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrolled(false);
      } else {
        // s up
        setIsScrolled(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
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
     <AnimatePresence >
        { (isScrolled  )&&(
      <motion.nav
        className={`fixed top-0 left-0 w-full ${ isSidebarOpen ? "hidden" :" block bg-transparent"
        } transition-colors duration-300 z-50`}
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: "#111827" }}
        exit={{ backgroundColor: "transparent" }}

      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Enigma</div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-white">
              About Club
            </a>
            <a href="#page2" className="text-white">
              Page 2
            </a>
            <a href="#page3" className="text-white">
              Page 3
            </a>
            <a href="#connect" className="text-white">
              Connect
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>
        )}
     </AnimatePresence>
        <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}

            //   onClick={toggleSidebar}
          >
            <div className="fixed top-0 left-0 w-full h-full bg-green-500 flex flex-col space-y-4 p-4">
              <button onClick={toggleSidebar} className="self-end text-white">
                Close
              </button>
              <a
                href="#about"
                className="text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                About Club
              </a>
              <a
                href="#page2"
                className="text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                Page 2
              </a>
              <a
                href="#page3"
                className="text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                Page 3
              </a>
              <a
                href="#connect"
                className="text-white "
                onClick={() => setIsSidebarOpen(false)}
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
