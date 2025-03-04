import React from "react";
import start01 from "../../images/Star 1.png";
import start03 from "../../images/Star 3.png";
import GetStarted_Uifry_grandiant from "../../images/Group 1000002356.png";
import GetStarted_AppleLogo from "../../images/Apple_logo.png";
import GetStatred_mobilePhones from "../../images/iPhone 13 Pro.png";
import GetStarted_star7 from "../../images/Star 7.png";
import GetStarted_star6 from "../../images/Star 6.png";
import GetStarted_bgTri_circle_left from "../../images/Group 35905.png";
import GetStarted_bgTri_circle_right from "../../images/Group 1000004718.png";

import "./GetStarted.css";
const GetStarted = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className="GetStarted_main ">
      <img
        className="absolute bottom-[18%] md:bottom-[15%] right-[5%] lg:bottom-[20%] z-20 lg:right-[6%] transition-transform duration-500 ease-in-out hover:rotate-180"
        src={start01}
        alt="Decorative Star"
      />
      <img
        className="absolute left-0 lg:left-12 bottom-[10%] lg:bottom-[16%] z-20 transition-transform duration-500 ease-in-out hover:rotate-180"
        src={start03}
        alt="star"
      />
      <img
        src={GetStarted_Uifry_grandiant}
        alt="bg Grandiant"
        className="GetStarted_Uifry_grandiant"
      />
      <div className="bg-black flex z-10 GetStarted_blackBox rounded-lg">
        <img
          className="GetStarted_bgTri_circle_left absolute bottom-0 w-[35%]"
          src={GetStarted_bgTri_circle_left}
          alt="get started tri circle bg"
        />
        <div className="GetStarted_content relative ">
          <img
            className="getStarted_star7"
            src={GetStarted_star7}
            alt="Decorative star 7"
          />
          <h1 className="relative text-white font-bold">
            {toTitleCase(`ready to get started?`)}
          </h1>
          <p className="text-white lg:text-lg text-base mt-2 md:mt-3 lg:mt-4 opacity-90">
            {toTitleCase(
              `Risus habitant leo egestas mauris diam eget morbi tempus vulputate.`
            )}
          </p>
          <span className="flex gap-2 items-center justify-center rounded-md bg-white text-black p-[14px] lg:mt-4 mt-3 w-[208px] transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 hover:bg-slate-200 cursor-pointer">
            <button className="font-medium text-lg">Download App</button>
            <img src={GetStarted_AppleLogo} alt="apple logo" />
          </span>
          <img
            className="GetStarted_star6"
            src={GetStarted_star6}
            alt="Decorative start 6"
          />
        </div>
        {/* get started mobile phone section */}
        <div className="GetStarted_mobilePhone_Section">
          <img
            className="GetStatred_mobilePhones"
            src={GetStatred_mobilePhones}
            alt="mobile phones"
          />
          <img
            src={GetStarted_Uifry_grandiant}
            alt="bg Grandiant"
            className="GetStarted_phones_Bg_grandiant"
          />
          <img
            className="GetStarted_bgTri_circle_right absolute right-0 w-[33%]"
            src={GetStarted_bgTri_circle_right}
            alt="get started tri circle bg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
