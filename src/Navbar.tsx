import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
//import photo from the asests
import photo from "./assets/logo-Photoroom.png";
interface Proptype {
  refss: React.MutableRefObject<HTMLDivElement | null>[];
  refmain: React.MutableRefObject<HTMLDivElement | null>;
  reffooter: React.MutableRefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<Proptype> = ({
  refss,
  refmain,
  reffooter,
}: Proptype) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (refmain.current && currentScrollTop > refmain.current.offsetHeight) {
        setIsScrolled(false);

        if (currentScrollTop > lastScrollTop) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
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
        {isScrolled && !isSidebarOpen && (
          <motion.nav
            className={`fixed  left-[25%] w-[53%]  rounded-[50px] 
              
            font-sans 
            leading-[1.3] 
            text-left 
            pointer-events-auto 
            cursor-default 
            outline-none 
            backdrop-blur-[20px] 
            transtiion-all
            transition-colors duration-300 z-50
            `}
            initial={{ backgroundColor: "rgba(25,25,25,0.6)", y: -90 }}
            animate={{ backgroundColor: "rgba(25,25,25,0.6)", y: 25 }}
            exit={{ y: -90 }}
          >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="text-2xl font-extrabold text-white">
                <img
                  src={photo}
                  alt="IRC-Photoroom"
                  className=" w-[120px] h-[-40px] "
                />
              </div>
              <div className="hidden md:flex space-x-8 p-4">
                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200
                 
                    hover:pointer-cursor
                  "
                  onClick={() => {
                    refmain.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Event
                </button>
                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200
                  
                    hover:pointer-cursor
                  "
                  onClick={() => {
                    refss[0].current?.scrollIntoView({ behavior: "smooth" });
                    refss[0].current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Timeline
                </button>
                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200
                   
                    hover:pointer-cursor
                  "
                  onClick={() => {
                    refss[1].current?.scrollIntoView({ behavior: "smooth" });
                    refss[1].current?.scrollIntoView({ behavior: "smooth" });
                    refss[1].current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Abstract
                </button>

                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200
                   
                    hover:pointer-cursor
                  "
                  onClick={() => {
                    reffooter.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Links
                </button>
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
                <motion.button
                  className="text-white text-lg"
                  onClick={() => {
                    refmain.current?.scrollIntoView({ behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  About Club
                </motion.button>
                <motion.button
                  className="text-white text-lg"
                  onClick={() => {
                    refss[0].current?.scrollIntoView({ behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  Timeline
                </motion.button>
                <motion.button
                  className="text-white text-lg"
                  onClick={() => {
                    refss[1].current?.scrollIntoView({ behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  Abstract
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
