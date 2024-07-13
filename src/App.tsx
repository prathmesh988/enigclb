import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useMotionValueEvent } from "framer-motion";
import { HeroHighlightDemo } from './her-highlight';
import { FollowerPointerCard } from './following-pointer';

const content = [
  {
    concept: "Concept of GDSC",
    inside: "Google-backed university clubs fostering web and app development, DSA, etc, learning, collaboration, and networking among students interested in Google technologies.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-rocket ghost-blue"
        data-icon="rocket"
        data-prefix="fas"
        style={{ color: "#147ddf" }}
        viewBox="0 0 512 512"
        width={120}
        height={120}
      >
        <path
          fill="currentColor"
          d="M156.6 384.9 125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
        />
      </svg>
    )
  },
  {
    concept: "Why GDSC?",
    inside: "GDSC is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-lightbulb ghost-green"
        data-icon="lightbulb"
        data-prefix="fas"
        style={{ color: "green" }}
        viewBox="0 0 384 512"
        width={120}
        height={120}
      >
        <path
          fill="currentColor"
          d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80zm-80-336c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
        />
      </svg>
    )
  },
  {
    concept: "Target audience",
    inside: "Students who are eager to learn and grow in the field of technology and are interested in Google technologies.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-users ghost-red"
        data-icon="users"
        data-prefix="fas"
        style={{ color: "red" }}
        viewBox="0 0 640 512"
        width={120}
        height={120}
      >
        <path
          fill="currentColor"
          d="M144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm368 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0zm-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
        />
      </svg>
    )
  }
];

const Column: React.FC<{ content: any, y: any }> = ({ content, y }) => {
  return (
    <motion.div style={{ y }} className="w-full">
      <h1 className='text-black mb-7 text-[3em] md:text-xl md:text-[4em] mb-10'>About US</h1>
      <div className="w-full h-full flex flex-col md:flex-row gap-2">
        {content.map((project: any, index: any) => (
          <FollowerPointerCard key={index} title={project.concept} className="w-full md:w-1/2 lg:w-1/3 h-auto">
            <div className="relative overflow-hidden h-[90%]  rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 md:h-[60%]">
              <div className='flex flex-col justify-center items-center h-full'>
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative"></div>
                <div className="p-4 md:p-6">
                  <div className='w-full'>
                    {project.svg()}
                  </div>
                  <h2 className="font-bold my-4 text-lg text-zinc-700">
                    {project.concept}
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500">
                    {project.inside}
                  </h2>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const gallery = useRef<HTMLDivElement | null>(null);
  const [scrollYValue, setScrollYValue] = useState(1);
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest);
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [-250, height /1.5]);
  const yprog = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  useMotionValueEvent(yprog, "change", (latest) => {
    setProgress(latest);
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center top-[-2%]">
      <div className="w-full h-[100vh] bg-[$9FEBAC]">
        <HeroHighlightDemo />
      </div>
      <div ref={gallery} className="w-full relative flex gap-4 p-4 overflow-hidden bg-white h-fit min-h-[150vh]" style={{ backgroundImage: `url('https://gdsc.dbit.in/img/Website_BG.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Column content={content} y={y} />
      </div>
      <div className="relative h-[100vh] w-full rounded-t-[1.5em] bg-black" style={{ top: `-${progress * 3}vh` }}></div>
    </main>
  );
};

export default Home;
