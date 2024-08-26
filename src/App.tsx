import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { HeroHighlightDemo } from "./her-highlight";
import { FollowerPointerCard } from "./following-pointer";
import Navbar from "./Navbar";
import { HoverEffect } from "./card-hover-effect";

import Footer from "./Footer";

import {
  CarouselContent,
  CarouselItem,
  Carousel,
  CarouselPrevious,
  CarouselNext,
} from "./components/carausal";

import { BackgroundBeams } from "./components/background-beams";

function Contact() {
  return (
    <div className="h-[100vh] w-full rounded  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="relative z-10">
          <img src="" alt="" />
        </div>
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the Confrence
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          This conference aims at fostering a vibrant research culture ,
          enhancing academic excellence and preparing the students for the
          future challenges . This event also provides a huge platform for
          scholars and research enthusiasts to showcase their research talents
          🧠. All the students now entering 2nd , 3rd and 4th year IIST can
          participate .
        </p>

        <a
          className="
            relative
            z-10
            px-6
            left-[40%]
            top-4
            p-4
            rounded-lg
            bg-gradient-to-r
            from-blue-300

            to-blue-500
            text-white
          
          transition
          duration-200
          ease-in-out
          transform
          hover:scale-105
          hover:text-blue-700
          hover:font-bold
            "
          href="
          https://docs.google.com/forms/d/e/1FAIpQLSdW1Dm5DGATn5mWwwZq3ngwUsbu3yr2cRkkdt1uk-Ir7JGQxw/viewform?usp=sf_link
          "
        >
          Join Us
        </a>
      </div>
      <BackgroundBeams />
    </div>
  );
}

interface Project {
  event: string;
  poster: string;
  about: string;
  date: string;
}

interface SliderProps {
  content: Project[];
}

const Insider = () => {
  return (
    <>
      <div>
        <div className="  shadow-lg rounded-lg">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Career Boost:</strong> Publishing sets you apart in job
              and graduate school applications, demonstrating valuable skills to
              employers and institutions.
            </li>
            <li>
              <strong>Skill Development:</strong> The research and writing
              process sharpens critical thinking, data analysis, and technical
              writing abilities.
            </li>
            <li>
              <strong>Field Contribution:</strong> You make a tangible impact in
              your area of study, positioning yourself as an emerging expert and
              opening future opportunities.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const Insider2Publish = () => {
  return (
    <>
      <div>
        <div className="  shadow-lg rounded-lg">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Topic Selection:</strong> Students will choose a research
              topic that interests them. They don't need to be experts, but
              should have some basic knowledge of the subject.
            </li>
            <li>
              <strong>Group Formation:</strong> We will form groups and assign a
              faculty member as a mentor to each group. and then further
              research tracks will be released.
            </li>
            <li>
              <strong>Mentorship:</strong>The assigned mentor will guide
              students in writing their papers and preparing their
              presentations.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const content = [
  {
    concept: "Who is this for?",
    inside:
      "The conference is for the undergraduate students of upcoming 2nd year, 3rd year, and the present 4th year students.  aiming to provide a platform for students to showcase their research work and to learn from the experiences of others. helps students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment.",
  },
  {
    concept: "Why Research?",
    inside: (
      <Insider  />
    ),
  },
  {
    concept: "Flow of this conference",
    inside: <Insider2Publish />,
  },
];

const events = [

  {
    event: "Day 1",
    about:
    "  Announcement of the event registeration from the circulation",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "15th August",
  },
  {
    event: "Day 2",
    about:
      "Closing of the registration forms",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "20th August",
  },

  {
    event: "Day 3",
    about:
      "Group Formation, Mentor aasing and Tracks release",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "Last week of August",
  },
  {
    event: "Day 4",
    about:
      "Abstract Submission",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "1st week of September",
  },
  {
    event: "Day 5",
    about:
      "Full Paper Submission",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "Last week of September",
  },
  {
    event: "Day 6 ",
    about:
      "Mails  of accpetance and modification",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "1st week of October",
  },

  {
    event: "Day 7",
    about:
      "Last Paper Submission",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "2nd week of October",
  },
  {
    event: "Day 8", 
    about:
      "conference day",
    poster: "https://gdsc.dbit.in/img/Website_BG.png",
    date: "18-19 October ",
  },
];
interface Project {
  event: string;
  poster: string;
  about: string;
  date: string;
}

const Column: React.FC<{ content: Project[] }> = ({ content }) => {
  return (
    <motion.div className="w-full">
      <h1
        className="text-white mb-7 ml-4 text-3xl md:text-5xl md:mb-10 md:ml-6 font-bold 
      py-10 
      
      "
      >
        Timeline
      </h1>
      <div className="hidden md:flex justify-center items-center w-full h-full">
        <Slider content={content} />
      </div>
      <div className="w-full p-4 flex flex-col items-center gap-2 md:hidden">
        {content.map((project: Project) => (
          <div
            key={project.event}
            className="w-full flex justify-center relative"
          >
            <FollowerPointerCard
              title={project.event}
              className="relative w-[85%] sm:w-[80%] h-full  after:content-[''] after:absolute after:top-0 after:left-[105%] after:w-5 after:h-5 after:bg-red-500 after:rounded-full     after:z-10 before:content-[''] before:absolute before:top-[1.2vh] before:left-[108%] before:w-[1px] before:h-full before:bg-white  before:z-10"
            >
              <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 flex-grow flex flex-col">
                <div className="w-full aspect-w-16 aspect-h-10 bg-blue-500 rounded-tr-lg rounded-tl-lg overflow-hidden relative p-3">
                  <img
                    src={project.poster}
                    alt="thumbnail"
                    className="rounded-lg w-full h-full object-cover transform group-hover:scale-95 group-hover:rounded-2xl transition duration-200"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h2 className="font-bold my-2 text-lg text-zinc-700 h-8">
                    {project.event}
                  </h2>
                  <p className="font-normal my-2 text-sm text-zinc-500 flex-grow">
                    {project.about}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      {project.date}
                    </span>
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

const Slider: React.FC<SliderProps> = ({ content }) => {
  return (
    <>
      <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <Carousel className="w-full max-w-[70%] ">
          <CarouselContent className="-ml-1">
            {content.map((project: Project) => (
              <CarouselItem key={project.event} title={project.event}>
                <div className="  relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 flex-grow flex flex-col ">
                  <div className="w-full aspect-w-16 aspect-h-10 bg-blue-500 rounded-tr-lg rounded-tl-lg overflow-hidden relative p-3">
                    <img
                      src={project.poster}
                      alt="thumbnail"
                      className="rounded-lg w-full h-full object-cover transform group-hover:scale-95 group-hover:rounded-2xl transition duration-200"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h2 className="font-bold my-2 text-lg text-zinc-700">
                      {project.event}
                    </h2>
                    <p className="font-normal my-2 text-sm text-zinc-500 flex-grow">
                      {project.about}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};


const Column2: React.FC<{ content: any; y: any }> = ({ content, y }) => {
  return (
    <motion.div style={{ y }} className="w-[100vw]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="self-start text-black mb-7 text-[3.3em] md:text-[5em] md:mb-10 md:ml-[3em] font-bold">
          About Event
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
  const refs = Array.from({ length: 2 }, () =>
    useRef<HTMLDivElement | null>(null)
  );

  const reffooter = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const scrollYprog2 = useScroll({
    target: gallery2,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [-300, height / 1.5]);
  const y2 = useTransform(
    scrollYprog2.scrollYProgress,
    [0, 1],
    [-171, height / 5]
  );

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

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Navbar refmain={gallery} refss={refs} reffooter={reffooter} />
      <main className="relative   flex flex-col items-center top-[-2%] overflow-x-hidden">
        <div className="w-full h-[100vh] bg-[#9FEBAC]" ref={gallery2}>
          <motion.div style={{ y: y2 }} className="w-full h-full">
            <HeroHighlightDemo />
          </motion.div>
        </div>
        <div
          id="aboutus"
          ref={gallery}
          className="w-full relative flex gap-4 p-4 overflow-hidden bg-white h-[250vh] md:h-[170vh] lg:h-[100vh]"
          style={{
            backgroundImage: `url(' https://gdsc.dbit.in/img/Website_BG.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Column2 content={content} y={y} />
        </div>
        <div
          ref={refs[0]}
          id="timeline"
          className="relative h-fit py-2 w-full bg-black lg:min-h-screen "
          style={{ top: `-${progress * 3}vh` }}
        >
          <Column content={events} />
        </div>
        <div
          ref={refs[1]}
          id="contactus"
          className="w-[100%] h-[100vh] flex items-center justify-center relative"
          style={{ top: `-${progress * 3}vh` }}
        >
          {/* <ContactForm /> */}

          <Contact />
        </div>
        <Footer refss={refs} refmain={gallery} reffooter={reffooter} />
      </main>
    </>
  );
};

export default Home;
