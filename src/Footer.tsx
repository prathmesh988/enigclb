// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section w-full bg-white text-black relative">
      <div className="container mx-auto px-4 py-8">
        <div className="footer-cta border-b border-[#373636] py-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="fas fa-map-marker-alt text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Find us</h4>
                  <span className="text-[#757575] text-base">
                    1010 Avenue, sw 54321, Chandigarh
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="fas fa-phone text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Call us</h4>
                  <span className="text-[#757575] text-base">9876543210</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="single-cta flex items-center">
                <i className="far fa-envelope-open text-[#ff5e14] text-3xl mr-4"></i>
                <div className="cta-text">
                  <h4 className="text-xl font-semibold mb-1">Mail us</h4>
                  <span className="text-[#757575] text-base">
                    mail@info.com
                  </span>
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
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      alt="logo"
                      className="w-40"
                    />
                  </a>
                </div>
                <div className="footer-text text-[#7e7e7e] mb-8">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span className="block text-2xl font-bold mb-5">Follow us</span>
                  <a href="#" className="facebook-bg inline-block mr-4">
                    <i className="fab fa-facebook-f bg-[#3B5998] text-white rounded-full h-10 w-10 flex items-center justify-center"></i>
                  </a>
                  <a href="#" className="twitter-bg inline-block mr-4">
                    <i className="fab fa-twitter bg-[#55ACEE] text-white rounded-full h-10 w-10 flex items-center justify-center"></i>
                  </a>
                  <a href="#" className="google-bg inline-block">
                    <i className="fab fa-google-plus-g bg-[#DD4B39] text-white rounded-full h-10 w-10 flex items-center justify-center"></i>
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
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Home</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">About</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Services</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Portfolio</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Contact</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">About Us</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Our Services</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Expert Team</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Contact Us</a>
                  </li>
                  <li className="w-1/2 mb-3">
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14] capitalize">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
        
          </div>
        </div>
       
      </div>

      <div>
      <div className="copyright-area bg-slate-300 py-4 px-2  flex items-center justify-center">
          <div className="flex flex-wrap justify-between items-center w-[75%]">
            <div className="w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
              <div className="copyright-text">
                <p className="text-[#878787] text-base">
                  Copyright &copy; 2018, All Right Reserved{' '}
                  <a href="https://codepen.io/anupkumar92/" className="text-[#ff5e14]">
                    Name
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-auto hidden lg:flex justify-end">
              <div className="footer-menu">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14]">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14]">Terms</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14]">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14]">Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#878787] hover:text-[#ff5e14]">Contact</a>
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
