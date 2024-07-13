// src/components/ParallaxPage.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxPage = () => {
  const { scrollY } = useScroll();

  // Create transformations for each layer
  const transformLayer1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const transformLayer2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const transformLayer3 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative h-[300vh]">
      <motion.div
        className="absolute inset-0 bg-blue-500"
        style={{ y: transformLayer1 }}
      >
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white">Page 1</h1>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-green-500"
        style={{ y: transformLayer2 }}
      >
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white">Page 2</h1>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-red-500"
        style={{ y: transformLayer3 }}
      >
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white">Page 3</h1>
        </div>
      </motion.div>
    </div>
  );
};


export default ParallaxPage;