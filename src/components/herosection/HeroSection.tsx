import React from "react";
import heroSection_bgGrandient_img from "../../images/finance-bg01.png";
import heroSection_mobile_img_01 from "../../images/iPhone-13-Pro-Front-1.png";
import heroSection_mobile_img_02 from "../../images/iPhone-13-Pro-Front002.png";
import heroSection_mobile_img_03 from "../../images/iPhone-13-Pro-Front003.png";
import hero_section_circleBg from "../../images/Group 35887.png";
import heroSection_mobileBg_GrandiantImg from "../../images/Group04.png";
import heroWatchIcon from "../../images/Group 3.png";
import heroSection_tapImg from "../../images/Group02.png";
import start03 from "../../images/Star 3.png";
import start01 from "../../images/Star 1.png";
import "./Herosection.css";
const HeroSection = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className="hero_section_main bg-white w-full mx-auto">
      <div className="hero_section_content">
        <img className="relative left-14 mt-4" src={start03} alt="" />
        <img
          className="heroSection_bgGrandient_img"
          src={heroSection_bgGrandient_img}
          alt="bg grandiant"
        />
        <div className="heroSection_text_bg">
          <h2 className="">
            {toTitleCase("make the best financial decisions")}
          </h2>
          <p className="text-gray-500 w-[616px] mt-6 z-10">
            {toTitleCase(`Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.`)}
          </p>
        </div>
        {/* Get starter and watch video */}
        <div className="heroSection_GetStarted">
          <button className="get_started items-center bg-black text-white px-7 py-4  md:flex rounded-sm font-medium transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-slate-600 ">
            Get Started ➡
          </button>
          <span className="flex gap-2 transition-all duration-500 ease-in-out hover:-translate-y-1 cursor-pointer">
            <img className="watch_video" src={heroWatchIcon} alt="" />
            <button className="watch_video whitespace-nowrap">
              Watch Video
            </button>
          </span>
        </div>
        {/* <div className="hroSection_TapImg"> */}
        <img
          className="heroSection_tamImg_rightSide_start"
          src={start03}
          alt="start"
        />
        <img
          className="hroSection_TapImg"
          src={heroSection_tapImg}
          alt="hero section Tap banner"
        />

        {/* </div> */}
      </div>
      <div className="hero_section_mobileOrder">
        <img
          className="hero_section_mobileOrder_start01"
          src={start01}
          alt="start 01"
        />
        <img
          className="hero_section_circleBg"
          src={hero_section_circleBg}
          alt="hero section circle img"
        />
        <img
          className="heroSection_tamImg_leftSide_start"
          src={start01}
          alt="start 01"
        />
        <div className="heroSection_Mobile_imgsFlex">
          <img
            className="heroSection_mobile_img_01"
            src={heroSection_mobile_img_01}
            alt="mobile 01"
          />
          <img
            className="heroSection_mobile_img_02"
            src={heroSection_mobile_img_02}
            alt=" mobile 02"
          />
          <img
            className="heroSection_mobile_img_03"
            src={heroSection_mobile_img_03}
            alt="mobile 02"
          />
        </div>
        <img
          className="heroSection_mobileBg_GrandiantImg"
          src={heroSection_mobileBg_GrandiantImg}
          alt="mobileBg_grandiant"
        />
      </div>
    </div>
  );
};

export default HeroSection;
