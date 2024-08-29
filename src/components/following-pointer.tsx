import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "../lib/util";
import { useInView } from "framer-motion";

type FollowerPointerCardProps = {
  children: React.ReactNode;
  className?: string;
  title?: any;
};
export const FollowerPointerCard: React.FC<FollowerPointerCardProps> = ({
  children,
  className,
  title,
}) => {
  // const [ref, inView] = useInView();
  // const ref1 = useRef<HTMLDivElement>(null);
  // const isInView = useInView(reff)

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};

type FollowPointerProps = {
  x: any; // Replace 'any' with appropriate type if x and y have specific motion value types
  y: any;
  title?: string;
};

export const FollowerPointerCardWFade: React.FC<FollowerPointerCardProps> = ({
  children,
  className,
  title,
  // containerref,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const [isInside, setIsInside] = useState(false);

  // Use the carousel context to get the API

  const handleMouseMove: any = (e: any) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      // Calculate mouse position relative to the element
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Update motion values
      x.set(relativeX);
      y.set(relativeY);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <motion.div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};
export const FollowPointer: React.FC<FollowPointerProps> = ({
  x,
  y,
  title,
}) => {
  const colors = [
    "var(--sky-500)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];

  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full"
      >
        {title || `William Shakespeare`}
      </motion.div>
    </motion.div>
  );
};
