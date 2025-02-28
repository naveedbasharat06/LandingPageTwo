import React from "react";
import "./whyChooseUifry.css";
import whyChooseBellIcon from "../../images/Group 35899.png";
import WhyChoose_Uifry_grandiant from "../../images/uifry_premiumBg_grandiant.png";
import WhyChoose_uifry_TriCircle from "../../images/uifry_premiumTriCircles.png";
import WhyChooseUifryMobile from "../../images/iPhone-13-Pro-Front02.png";
import OnHoldMobileImg from "../../images/On Hold.png";
import start01 from "../../images/Star 1.png";
const WhyChooseUifry: React.FC = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-10 px-2 md:px-6 lg:px-20">
      <div className="whyChoose_uifry_content md:w-2/3 lg:w-1/2 mt-10 lg:mt-0 lg:ml-4">
        <h4 className="text-red-500 uppercase text-base md:text-lg font-medium tracking-widest ml-9 ">
          advatnages
        </h4>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black  dark:text-slate-100 ml-9 tracking-wider mt-1">
          Why Choose Uifry?
        </h2>
        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <img
              src={whyChooseBellIcon}
              alt="bel icon"
              className="text-red-500 text-lg text-center w-8 lg:text-sm mt-1 relative left-9 transition-transform duration-500 ease-in-out hover:rotate-90 cursor-pointer"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text- dark: ml-8 flex items-center gap-2 whitespace-nowrap">
                Clever Notifications
              </h3>
              <p
                className="text-gray-500 dark:text-slate-300 text-base md:mr-0  lg:mr-8 lg:text-lg mt-6 font-medium
"
              >
                {toTitleCase(` Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-sm lg:ml-5 lg:max-w-md mt-4">
        <img
          src={WhyChoose_Uifry_grandiant}
          alt="bg Grandiant"
          className="WhyChoose_Uifry_grandiant"
        />
        <img
          src={WhyChoose_uifry_TriCircle}
          alt="Tri circle"
          className="WhyChoose_uifry_TriCircle"
        />
        <img
          src={WhyChooseUifryMobile}
          alt="mobile pic"
          className="WhyChooseUifryMobile transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110"
        />
        <img
          src={OnHoldMobileImg}
          alt="On Hold"
          className="OnHoldMobileImg transition delay-150 duration-300 ease-in-out hover:-translate-y-2 "
        />
      </div>

      <img
        className="absolute right-5 top-8 z-10 transition-transform duration-500 ease-in-out hover:rotate-180"
        src={start01}
        alt="start 01"
      />
    </section>
  );
};

export default WhyChooseUifry;
