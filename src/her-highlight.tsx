import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { motion } from "framer-motion";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="flex flex-col justify-center items-center w-full h-full "></div>
          <div className=" w-full h-full relative">
            <div className="absolute z-auto top-[-100%] left-[-10%]">
              <svg
                width="250"
                height="263"
                viewBox="0 0 466 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M222.606 121.859C220.525 122.054 218.355 122.283 216.124 122.538L221.662 120.374L201.996 121.285L190.733 112.192L192.338 123.236L180.03 128.047C176.26 128.742 172.439 129.479 168.59 130.257C148.736 134.267 130.561 138.832 117.419 143.107C103.297 147.702 96.941 151.293 98.5301 153.78C100.119 156.267 109.086 156.762 125.18 155.253C128.131 154.977 131.255 154.636 134.506 154.239L143.155 153.839L150.843 160.045L149.748 152.507L151.382 151.869C160.237 150.476 169.636 148.787 179.196 146.855C199.05 142.845 217.225 138.28 230.367 134.005C244.489 129.41 250.845 125.82 249.256 123.332C247.667 120.845 238.7 120.35 222.606 121.859ZM178.25 145.375C171.333 146.773 164.771 147.992 158.599 149.048L160.803 148.186L147.377 148.808L139.688 142.6L140.783 150.14L134.406 152.632C114.469 155.062 102.293 155.024 101.159 153.249C99.3392 150.401 124.47 140.843 169.534 131.74C173.938 130.85 178.193 130.034 182.301 129.285L195.799 128.66L207.062 137.753L205.457 126.709L210.095 124.895C231.97 122.053 245.424 121.994 246.62 123.865C248.44 126.713 223.31 136.273 178.25 145.375Z"
                  fill="#C75959"
                />
                <path
                  d="M281.329 69.8965L279.506 65.8672C279.212 65.2187 277.576 65.2187 277.282 65.8672L275.458 69.8965C275.356 70.1219 275.047 70.2988 274.648 70.36L266.715 71.5795C265.566 71.7563 265.599 72.6787 266.759 72.8301L274.065 73.7837C274.478 73.8381 274.807 74.0161 274.914 74.2472L277.282 79.2914C277.582 79.9318 279.2 79.9318 279.5 79.2914L281.868 74.2472C281.977 74.0161 282.304 73.8381 282.717 73.7837L290.023 72.8301C291.183 72.6787 291.215 71.7563 290.066 71.5795L282.133 70.36C281.741 70.2976 281.432 70.1208 281.329 69.8965Z"
                  fill="#C75959"
                />
                <path
                  d="M289.53 65.5273L288.8 63.9149C288.683 63.656 288.027 63.656 287.91 63.9149L287.18 65.5273C287.139 65.6175 287.016 65.688 286.857 65.7123L283.683 66.2C283.223 66.2705 283.237 66.6393 283.7 66.7005L286.623 67.082C286.789 67.1039 286.919 67.1744 286.962 67.2681L287.91 69.2862C288.031 69.5428 288.677 69.5428 288.798 69.2862L289.746 67.2681C289.789 67.1756 289.92 67.1039 290.085 67.082L293.008 66.7005C293.473 66.6404 293.485 66.2705 293.024 66.2L289.85 65.7123C289.694 65.688 289.571 65.6175 289.53 65.5273Z"
                  fill="#C75959"
                />
              </svg>
            </div>
            <h1 className="text-[85%] font-bold text-white w-[100%]">
              IIST’24 student internal research conference 
            </h1>
          
        
          <Highlight className="text-black dark:text-white w-[60vw] h md:w-[70vw] text-[30px]  ">
            internal conference in Innovative science & technology
          </Highlight>
        </div>
                  
      </motion.h1>
    </HeroHighlight>
  );
}


