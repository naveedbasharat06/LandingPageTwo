import React from "react";
import "./Premium.css";
import premiumStart from "../../images/premuimStar.png";
import premiumBrows from "../../images/premuimBrows.png";
import premiumRectange from "../../images/premiumRectangle.png";
import uifry_premiumBg_grandiant from "../../images/uifry_premiumBg_grandiant.png";
import uifry_premiumBg_TriCircle from "../../images/uifry_premiumTriCircles.png";
import uifry_premiumMobile from "../../images/uifryPremiumMobile.png";
import uifry_premium_rightHalf_BgGrandiant from "../../images/Group 35897.png";
import start03 from "../../images/Star 3.png";
const UifryPremium: React.FC = () => {
  interface UifryPremiumT {
    Id: number;
    icons: string;
    heading: string;
    description: string;
  }
  // Explicitly defining the array type
  const UifryPremiumData: UifryPremiumT[] = [
    {
      Id: 1,
      icons: premiumStart,
      heading: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      Id: 1,
      icons: premiumBrows,
      heading: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {
      Id: 1,
      icons: premiumRectange,
      heading: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
  ];
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-12 px-6 lg:px-20">
      <img
        className="absolute left-28 top-16 z-10 transition-transform duration-500 ease-in-out hover:rotate-180"
        src={start03}
        alt="star"
      />
      <div className="relative w-full max-w-sm lg:max-w-md">
        <img
          src={uifry_premiumBg_grandiant}
          alt="bg Grandiant"
          className="uifry_premiumBg_grandiant"
        />
        <img
          src={uifry_premiumBg_TriCircle}
          alt="Tri circle"
          className="uifry_premiumBg_TriCircle "
        />
        <img
          src={uifry_premiumMobile}
          alt="mobile pic"
          className="uifry_premiumMobile transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110"
        />
      </div>
      <div className="uifry_Premium_content lg:w-1/2 mt-10 lg:mt-0 lg:ml-6 ml-[-16px]">
        <h4 className="text-red-500 uppercase text-base md:text-lg font-medium tracking-widest ml-9 ">
          Features
        </h4>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black dark:text-white ml-9 tracking-wider mt-1">
          Uifry Premium
        </h2>
        <img
          className="uifry_premium_rightHalf_BgGrandiant"
          src={uifry_premium_rightHalf_BgGrandiant}
          alt=" premuim half Grandiant"
        />
        <div className="mt-6 space-y-6">
          {UifryPremiumData.map((item) => (
            <div key={item.Id} className="flex items-start space-x-4">
              <img
                src={item.icons}
                alt={item.heading}
                className="text-red-500 text-lg lg:text-sm mt-1 relative left-9"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900  dark:text-white ml-8">
                  {item.heading}
                </h3>
                <p
                  className="text-black opacity-50 dark:opacity-70 dark:text-slate-200 da text-base lg:text-lg mt-2 font-medium
"
                >
                  {toTitleCase(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UifryPremium;
