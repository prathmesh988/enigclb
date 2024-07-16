import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { HeroHighlightDemo } from "./her-highlight";
import { FollowerPointerCard } from "./following-pointer";
import Navbar from "./Navbar";
import { HoverEffect } from "./card-hover-effect";
import ContactForm from "./Contactus";
import Footer from "./Footer";

const content = [
  {
    concept: "Concept of GDSC",
    inside:
      "Google-backed university clubs fostering web and app development, DSA, etc, learning, collaboration, and networking among students interested in Google technologies.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-rocket ghost-blue"
        data-icon="rocket"
        data-prefix="fas"
        style={{ color: "#147ddf" }}
        viewBox="0 0 512 512"
        width={80}
        height={80}
      >
        <path
          fill="currentColor"
          d="M156.6 384.9 125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
        />
      </svg>
    ),
  },
  {
    concept: "Why GDSC?",
    inside:
      "GDSC is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-lightbulb ghost-green"
        data-icon="lightbulb"
        data-prefix="fas"
        style={{ color: "green" }}
        viewBox="0 0 384 512"
        width={80}
        height={80}
      >
        <path
          fill="currentColor"
          d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80zm-80-336c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
        />
      </svg>
    ),
  },
  {
    concept: "Target audience",
    inside:
      "Students who are eager to learn and grow in the field of technology and are interested in Google technologies.",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="svg-inline--fa fa-users ghost-red"
        data-icon="users"
        data-prefix="fas"
        style={{ color: "red" }}
        viewBox="0 0 640 512"
        width={80}
        height={80}
      >
        <path
          fill="currentColor"
          d="M144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm368 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0zm-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
        />
      </svg>
    ),
  },
];

const events = [
  {
    event: "Event 1",
    about:
      "Google-backed university clubs fostering web and app development, DSA, etc, learning, collaboration, and networking among students interested in Google technologies.",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "12/12/2021",
  },
  {
    event: "Event 2",
    about:
      "GDSC is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment.",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "12/12/2021",
  },
  {
    event: "Event 3",
    about:
      "Students who are eager to learn and grow in the field of technology and are interested in Google technologies.",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "12/12/2021",
  },
];

const Column: React.FC<{ content: any }> = ({ content }) => {
  return (
    <motion.div className="w-full">
      <h1 className="text-white mb-7 ml-[1em] text-[3.3em] md:text-[5em] md:mb-10 md:ml-[1.5em] font-bold">
        Timeline
      </h1> 

      <div className="w-full p-4 h-full flex flex-col items-center flex-wrap lg:flex-row n gap-2 md:hidden">
        {content.map((project: any) => (
          <div className="w-[100%] h-[100%] flex justify-center relative  ">
          <FollowerPointerCard
            key={project.event} // Add a key for list items
            title={project.event}
            className=" hidden w-[60%] md:w-[40%] h-full lg:w-[20%] after:absolute after:content-[''] after:w-[2px] after:ml-0.5 after:text-red-500   after:bg-white after:left-[120%] after:top-[1%] after:h-[100%] before:absolute before:content-[' '] before:w-4 before:ml-0.5  before:bg-red-400 before:left-[117%] before:top-[-1%] before:h-[4%] before:z-30 before:rounded-full after:z-10 "
          >
            <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100x">
              <div className="w-full aspect-w-16 aspect-h-10 bg-blue-500 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative p-3">
                <img
                  src={project.poster}
                  alt="thumbnail"
                  className="rounded-lg w-full inset-0 group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700 h-[2em]">
                  {project.event}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500 h-[9em]">
                  {project.about}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
          </div>
        ))}
      </div>
      <div className="w-full p-4 h-full flex flex-col items-center flex-wrap lg:flex-row n gap-2 md:hidden">
        {content.map((project: any) => (
          <div className="w-[100%] h-[100%] flex justify-center relative  ">
          <FollowerPointerCard
            key={project.event} // Add a key for list items
            title={project.event}
            className="w-[60%] md:w-[40%] h-full lg:w-[20%] after:absolute after:content-[''] after:w-[2px] after:ml-0.5 after:text-red-500   after:bg-white after:left-[120%] after:top-[1%] after:h-[100%] before:absolute before:content-[' '] before:w-4 before:ml-0.5  before:bg-red-400 before:left-[117%] before:top-[-1%] before:h-[4%] before:z-30 before:rounded-full after:z-10 "
          >
            <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100x">
              <div className="w-full aspect-w-16 aspect-h-10 bg-blue-500 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative p-3">
                <img
                  src={project.poster}
                  alt="thumbnail"
                  className="rounded-lg w-full inset-0 group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700 h-[2em]">
                  {project.event}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500 h-[9em]">
                  {project.about}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Column2: React.FC<{ content: any; y: any }> = ({ content, y }) => {
  return (
    <motion.div style={{ y }} className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="self-start text-black mb-7 text-[3.3em] md:text-[5em] md:mb-10 md:ml-[3em] font-bold">
          About Us
        </h1>
        <HoverEffect
          items={content}
          className="w-full md:w-[60%] lg:w-[70%] h-auto md:h-[20%] lg:h-[45%]"
        />
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const gallery = useRef<HTMLDivElement | null>(null);
  const gallery2 = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const scrollYprog2 = useScroll({
    target: gallery2,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [-300, height / 1.5]);
  const y2 = useTransform(scrollYprog2.scrollYProgress, [0, 1], [-171, height / 5]);

  const yprog = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  useMotionValueEvent(yprog, 'change', (latest) => {
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
    <>
      <Navbar />
      <main className="relative flex flex-col items-center top-[-2%]">
        <div className="w-full h-[100vh] bg-[#9FEBAC]" ref={gallery2}>
          <motion.div style={{ y: y2 }} className="w-full h-full">
            <HeroHighlightDemo />
          </motion.div>
        </div>
        <div
          ref={gallery}
          className="w-full relative flex gap-4 p-4 overflow-hidden bg-white h-[150vh] md:h-[100vh]"
          style={{
            backgroundImage: `url('https://gdsc.dbit.in/img/Website_BG.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Column2 content={content} y={y} />
        </div>
        <div
          className="relative h-fit py-2 w-full rounded-t-[1.5em] bg-black lg:min-h-[100vh] lg:h-fit"
          style={{ top: `-${progress * 3}vh` }}
        >
          <Column content={events} />
        </div>
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;