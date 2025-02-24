import React from "react";
import heroSection_bgGrandient_img from "../../images/finance-bg01.png";
import heroSection_mobile_img_01 from "../../images/iPhone-13-Pro-Front-1.png";
import heroSection_mobile_img_02 from "../../images/iPhone-13-Pro-Front002.png";
import heroSection_mobile_img_03 from "../../images/iPhone-13-Pro-Front003.png";
import hero_section_circleBg from "../../images/Group 35887.png";
import heroSection_mobileBg_GrandiantImg from "../../images/Group04.png";
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
    <div className="flex bg-white h-auto">
      <div className="hero_section_content">
        <img
          className="heroSection_bgGrandient_img"
          src={heroSection_bgGrandient_img}
          alt="bg grandiant"
        />
        <div className="heroSection_text_bg mt-6 ml-20 relative left-10 bottom-52 ">
          <h2 className="text-6xl font-bold">
            {toTitleCase("make the best financial decisions")}
          </h2>
          <p className="text-lg">
            {toTitleCase(`Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.`)}
          </p>
        </div>
      </div>
      <div className="hero_section_mobileOrder">
        <img
          className="hero_section_circleBg"
          src={hero_section_circleBg}
          alt="hero section circle img"
        />
        <div className="heroSection_Mobile_imgsFlex">
          <img
            className="heroSection_mobile_img_01 "
            src={heroSection_mobile_img_01}
            alt="mobile 01"
          />
          <img
            className="heroSection_mobile_img_02 "
            src={heroSection_mobile_img_02}
            alt=" mobile 02"
          />
          <img
            className="heroSection_mobile_img_03 "
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
