// Footer.tsx

import React, { useEffect, useState } from "react";

import image from "./assets/logo-Photoroom.png";
//import dotenv

interface Proptype {
  refss: React.MutableRefObject<HTMLDivElement | null>[];
  refmain: React.MutableRefObject<HTMLDivElement | null>;
  reffooter: React.MutableRefObject<HTMLDivElement | null>;
}

const Footer: React.FC<Proptype> = ({
  refss,
  refmain,
  reffooter,
}: Proptype) => {
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    // console.log(import.meta.env.MAIL);
    //   console.log(import.meta.env.FINDUS);
    //     console.log(import.meta.env.CALLUS);

    // console.log(process.env); ;
    setMail(process.env.MAIL || "");
    setAddress(process.env.FINDUS || "");
    setPhone(process.env.CALLUS || "");
  }, []);
  return (
    <footer
      className="footer-section w-full bg-white text-black relative"
      ref={reffooter}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="footer-cta border-b border-[#373636] py-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="fas fa-map-marker-alt text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Find us</h4>
                  <span className="text-[#757575] text-base">{address}</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="fas fa-phone text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Call us</h4>
                  <span className="text-[#757575] text-base"> {phone} </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="far fa-envelope-open text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Mail </h4>
                  <span className="text-[#757575] text-base">{mail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-12">
              <div className="footer-widget">
                <div className="footer-logo mb-8">
                  <a href="index.html">
                    <img src={image} alt="logo" className="w-40" />
                  </a>
                </div>
                <div className="footer-text text-[#7e7e7e] mb-8">
                  <p>
                    The IIST Research Conference, organized by students Of
                    Indore Institute Of Science and Technology, is a pivotal
                    initiative to promote undergraduate research. This platform
                    allows students to engage in academic research typically
                    reserved for postgraduates, fostering critical thinking,
                    problem-solving skills, and hands-on experience in
                    scientific methodology.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span className="block text-2xl font-bold mb-5">
                    Follow us
                  </span>

                  <a
                    href="https://www.instagram.com/iist_research_conference/"
                    className="text-[#878787] hover:text-[#ff5e14] mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 25.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 25.017593 34 16 29.982407 16 25 C 16 25.017593 25.017593 16 25 16 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className="text-xl font-semibold mb-10 relative before:content-[''] before:absolute before:left-0 before:bottom-[-15px] before:h-[2px] before:w-[50px] before:bg-[#ff5e14]">
                    Useful Links
                  </h3>
                </div>
                <ul className="flex flex-wrap">
                  <li className="w-1/2 mb-3">
                    <button
                      className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Home
                    </button>
                  </li>
                  <li className="w-1/2 mb-3">
                    <button
                      className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      onClick={() => {
                        refmain.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      About
                    </button>
                  </li>
                  <li className="w-1/2 mb-3">
                    <button
                      className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      onClick={() => {
                        refss[0].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[0].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Timeline
                    </button>
                  </li>
                  <li className="w-1/2 mb-3">
                    <button
                      className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      onClick={() => {
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Abstract
                    </button>
                  </li>
                  <div className="w-full">
                    <li className="w-1/2 mb-3">
                      <a
                        href="https://www.site.uottawa.ca/~bochmann/Projects/how-to-do-good-research/index.html"
                        className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      >
                        {" "}
                        How to do research in computer science
                      </a>
                    </li>

                    <li className="w-1/2 mb-3">
                      <a
                        href="https://svr-sk818-web.cl.cam.ac.uk/keshav/papers/07/paper-reading.pdf"
                        className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      >
                        How to read a paper
                      </a>
                    </li>
                    <li className="w-1/2 mb-3">
                      <a
                        href="#"
                        className="text-[#878787] hover:text-[#ff5e14] capitalize"
                      >
                        How to write a research paper - Microsoft Research:
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4484.7586814097485!2d75.77899919193555!3d22.629511579697827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f939228d75dd%3A0xcf9efd7925de48cc!2sIndore%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sin!4v1724688593617!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true} // Set this to true as a boolean value
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div>
        <div className="copyright-area bg-slate-300 py-4 px-2  flex items-center justify-center">
          <div className="flex flex-wrap justify-between items-center w-[75%]">
            <div className="w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0"></div>
            <div className="w-full lg:w-auto hidden lg:flex justify-end">
              <div className="footer-menu">
                <ul className="flex space-x-6">
                  <li>
                    <button
                      className="text-[#878787] hover:text-[#ff5e14]"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-[#878787] hover:text-[#ff5e14]"
                      onClick={() => {
                        refmain.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      About Event
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-[#878787] hover:text-[#ff5e14]"
                      onClick={() => {
                        refss[0].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[0].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Timeline
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-[#878787] hover:text-[#ff5e14]"
                      onClick={() => {
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                        refss[1].current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Abstract
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-[#878787] hover:text-[#ff5e14]"
                      onClick={() => {
                        reffooter.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Links
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
