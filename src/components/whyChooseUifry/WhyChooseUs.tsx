import React from "react";
import "./whyChooseUifry.css";
import whyChooseBellIcon from "../../images/Group 35899.png";
import WhyChoose_Uifry_grandiant from "../../images/uifry_premiumBg_grandiant.png";
import WhyChoose_uifry_TriCircle from "../../images/uifry_premiumTriCircles.png";
import WhyChooseUifryMobile from "../../images/iPhone-13-Pro-Front02.png";
const WhyChooseUifry: React.FC = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-12 px-6 lg:px-20">
      <div className="whyChoose_uifry_content lg:w-1/2 mt-10 lg:mt-0 lg:ml-6">
        <h4 className="text-red-500 uppercase text-lg md:text-xs font-semibold tracking-widest ml-9 ">
          advatnages
        </h4>
        <h2 className="text-5xl md:text-3xl lg:text-4xl font-extrabold text-black ml-9 tracking-wider mt-1">
          Why Choose Uifry?
        </h2>

        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <img
              src={whyChooseBellIcon}
              alt="bel icon"
              className="text-red-500 text-lg text-center w-7 lg:text-sm mt-1 relative left-9"
            />
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 ml-8">
                Clever notifications
              </h3>
              <p
                className="text-gray-500 text-base lg:text-lg mt-2 font-medium
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
      <div className="relative w-full max-w-sm lg:max-w-md mt-4">
        <img
          src={WhyChoose_Uifry_grandiant}
          alt="bg Grandiant"
          className="WhyChoose_Uifry_grandiant"
        />
        <img
          src={WhyChoose_uifry_TriCircle}
          alt="Tri circle"
          className="WhyChoose_uifry_TriCircle "
        />
        <img
          src={WhyChooseUifryMobile}
          alt="mobile pic"
          className="WhyChooseUifryMobile"
        />
      </div>
    </section>
  );
};

export default WhyChooseUifry;
