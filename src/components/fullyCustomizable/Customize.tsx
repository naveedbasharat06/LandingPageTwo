import React from "react";
import "./Customize.css";
import customizableIcon from "../../images/customizableIcon.png";
import fullCustomizable_Uifry_grandiant from "../../images/Group 35932.png";
import fullCustomizable_uifry_TriCircle from "../../images/uifry_premiumTriCircles.png";
import CustomizableUifryMobileView from "../../images/iPhone-13-Pro-Front-customize.png";
import customizeOnHold from "../../images/customizeOnHold.png";
import start03 from "../../images/Star 3.png";
const Customizable: React.FC = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-2 px-6 lg:px-20">
      <div className="relative w-full max-w-sm lg:ml-5 lg:max-w-md mt-4">
        <img
          src={fullCustomizable_Uifry_grandiant}
          alt="bg Grandiant"
          className="fullCustomizable_Uifry_grandiant"
        />
        <img
          src={fullCustomizable_uifry_TriCircle}
          alt="Tri circle"
          className="fullCustomizable_uifry_TriCircle"
        />
        <img
          src={CustomizableUifryMobileView}
          alt="mobile pic"
          className="CustomizableUifryMobileView transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110"
        />
        <img
          src={customizeOnHold}
          alt="On Hold"
          className="customizeOnHold transition delay-150 duration-300 ease-in-out hover:-translate-y-2 "
        />
      </div>
      <div className="whyChoose_uifry_content md:w-2/3 lg:w-1/2 mt-10 lg:mt-0 lg:ml-4 ml-[-16px]">
        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-2">
            <img
              src={customizableIcon}
              alt="bel icon"
              className="text-red-500 text-lg text-center w-8 md:w-9 lg:mb-1 lg:text-sm relative left-9 transition-transform duration-500 ease-in-out hover:rotate-180 cursor-pointer"
            />
            <div>
              <h3 className="text-3xl font-semibold text-dark: ml-10">
                Fully Customizable
              </h3>
              <p
                className="text-black opacity-50 dark:opacity-70 dark:text-slate-100 text-base md:mr-0  lg:mr-8 lg:text-lg mt-8 font-medium
"
              >
                {toTitleCase(
                  `Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.`
                )}
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute left-50 top-3 z-10 transition-transform duration-500 ease-in-out hover:rotate-180"
          src={start03}
          alt="star"
        />
      </div>
    </section>
  );
};

export default Customizable;
