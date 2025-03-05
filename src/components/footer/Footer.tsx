// import company_logo from "../../images/nexcentLogo.svg";
import uifry_logo from "../../images/uifry_logo.png";
import emailFrame from "../../images/FrameEmail.png";
import PhNoFrame from "../../images/Framecontant.png";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Footer.css";
const Footer = () => {
  const [isLinkOpen, setIsLinksOpen] = useState(true);
  const [isLegalOpen, setIsSupportOpen] = useState(true);
  const [isProductOpen, setIsProductOpen] = useState(true);

  const toggleLinks = () => setIsLinksOpen(!isLinkOpen);
  const toggleLegal = () => setIsSupportOpen(!isLegalOpen);
  const toggleProduct = () => setIsProductOpen(!isProductOpen);
  const year = new Date().getFullYear();
  // const;
  return (
    <>
      <div className="footer bg-white dark:bg-slate-900 flex sm:flex-col">
        <div className="footer_Link_sections flex gap-6">
          <div className="uifry gap-x-40">
            <div className="Nexcent_logo">
              <img id="Nexcentlogo" src={uifry_logo} alt="Nexcent logo" />
            </div>
            <div className="copy_right grid gap-5">
              <span className="flex gap-2">
                <img src={emailFrame} alt="email" />
                <p className=""> help@frybix.com</p>
              </span>
              <span className="flex gap-2">
                <img src={PhNoFrame} alt="email" />
                <p className="font-bold text-base">+1 234 456 678 89</p>
              </span>
            </div>
          </div>
          <div className="company">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>

              <li>
                <a href="/Booking">Booking</a>
              </li>

              <li>
                <a href="/Blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="Support">
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="/TermsOfUse">Terms Of Use</a>
              </li>

              <li>
                <a href="/PrivacyPolicy">Privacy Policy</a>
              </li>

              <li>
                <a href="/CookiePolicy">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="Support">
            <h2>Product</h2>
            <ul>
              <li>
                <a href="/TakeTour">Take Tour</a>
              </li>

              <li>
                <a href="/LiveChat">Live Chat</a>
              </li>

              <li>
                <a href="/Reviews">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="Stay_upto_Date">
            <h1 className="font-medium text-3xl">Newsletter</h1>

            <h2>Stay up to date</h2>
            {/* <span className="flex  overflow-hidden"> */}
            <input
              className=" bg-slate-100 font-medium"
              type="text"
              placeholder="Your email"
            />
            <button className="relative bottom-0 z-10 text-white right-4 bg-black px-9 py-5 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 hover:bg-slate-900 cursor-pointer">
              Subscribe
            </button>
            {/* </span> */}
          </div>
        </div>
      </div>
      {/* MObile View Footer */}
      <div className="mobile_View_footer gap-6">
        <div className="mobileView_companySupport">
          <div className="MobileView_company">
            <h2
              onClick={toggleLinks}
              className="cursor-pointer flex justify-between"
            >
              Links <span>{isLinkOpen ? "▲" : "▼"}</span>
            </h2>
            <AnimatePresence>
              {isLinkOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>
                    <a href="/Home">Home</a>
                  </li>
                  <li>
                    <a href="/AboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/Booking">Booking</a>
                  </li>
                  <li>
                    <a href="/Blog">Blog</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="MobileView_support">
            <h2
              onClick={toggleLegal}
              className="cursor-pointer flex justify-between"
            >
              Legal
              <span>{isLegalOpen ? "▲" : "▼"}</span>
            </h2>
            <AnimatePresence>
              {isLegalOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>
                    <a href="/termsOfService">Terms Of Use</a>
                  </li>

                  <li>
                    <a href="/privacyPolicy">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/Legal">Cookie Policy</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="MobileView_support">
            <h2
              onClick={toggleProduct}
              className="cursor-pointer flex justify-between"
            >
              Product
              <span>{isProductOpen ? "▲" : "▼"}</span>
            </h2>
            <AnimatePresence>
              {isProductOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>
                    <a href="/termsOfService">Take Tour</a>
                  </li>

                  <li>
                    <a href="/privacyPolicy">Live Chat</a>
                  </li>
                  <li>
                    <a href="/Legal">Review</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="MobileView_Nexcent_InputFiend">
          <div className="MobileView_Nexcent gap-x-30">
            <div className="flex MobileView_Nexcent_logo">
              <img id="Nexcentlogo" src={uifry_logo} alt="Nexcent logo" />
            </div>
            <div className="MobileView_copy_right grid gap-3 md:gap-6">
              <p className="font-bold">help@frybix.com</p>
              <p>+1 234 456 678 89</p>
            </div>
          </div>
          <div className="MobileView_Stay_upto_Date">
            <h1 className="font-medium text-3xl">Newsletter</h1>

            <h2>Stay up to date</h2>
            <input
              className="bg-slate-100"
              type="text"
              placeholder="Your email"
            />
            <button className="relative bottom-0 z-10 text-white right-10 bg-black px-5 py-4 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 cursor-pointer rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="footer_horizontal_line" />
      <p className="text-center font-medium  mt-5 md:mt-8 pb:3 md:pb-14">
        Copyright {year} uifry.com all rights reserved
      </p>
    </>
  );
};

export default Footer;
