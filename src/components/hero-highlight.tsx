import { cn } from "../lib/util";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
 
export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
 
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
 
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative h-[100%] flex items-center  bg-[#74D683] justify-center w-full group ",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-white-300 dark:bg-dot-thick-white pointer-events-none h-[100%]" />
      <motion.div
        className="pointer-events-none bg-dot-thick-black  dark:bg-dot-thick-black   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 h-[100%]"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 100%,
              transparent 0%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 40%,
              transparent 100%
            )
          `,
        }}
      />
 
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};
 
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r  from-slate-50 to-purple-300  dark:from-pink-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};