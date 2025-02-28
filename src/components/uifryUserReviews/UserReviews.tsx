import React from "react";
import UserReview_Uifry_grandiant from "../../images/Group 1000002356.png";
import UserReview_uifry_TriCircle from "../../images/uifry_premiumTriCircles.png";
import UserRiviewsHoldOn_Img from "../../images/Group 1000002331.png";
import start01 from "../../images/Star 1.png";
import Group28 from "../../images/Group 28.png";
import Group27 from "../../images/Group 27.png";
import Group29 from "../../images/Group 29.png";
import Group30 from "../../images/Group 30.png";
import Group31 from "../../images/Group 31.png";

import "./UserReviews.css";
const UserReviews = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className=" py-20 px-2 md:px-2 lg:px-20">
      <div className="w-[455px] md:text-center mx-10 md:mx-auto">
        <img
          className="absolute right-40 top-2 z-10 transition-transform duration-500 ease-in-out hover:rotate-180"
          src={start01}
          alt="start 01"
        />
        <p className="uppercase text-lg text-black font-medium tracking-wider">
          testimonial
        </p>
        <h1 className="lg:text-5xl text-4xl font-bold">
          {toTitleCase(`what our users say about us?`)}
        </h1>
      </div>
      <div className="relative flex flex-col md:flex-row items-center md:justify-between md:mt-16 lg:mt-20">
        {/* User Rieviews Circle Background */}
        <div className="relative w-full md:w-2/4 mt-4">
          <img
            src={UserReview_Uifry_grandiant}
            alt="bg Grandiant"
            className="UserReview_Uifry_grandiant"
          />
          <img
            src={UserReview_uifry_TriCircle}
            alt="Tri circle"
            className="UserReview_uifry_TriCircle"
          />
          <img
            src={UserRiviewsHoldOn_Img}
            alt="mobile pic"
            className="UserRiviewsHoldOn_Img"
          />
        </div>

        <div className="md:w-2/4 lg:ml-4 ml-[-16px]">
          <div className="lg:w-[442px]  md:mr-2 lg:ml-20 md:ml-2">
            <h3 className="text-[28px] leading-[28px] font-semibold text-dark:">
              {toTitleCase("the best financial accounting app ever!")}
            </h3>
            <p
              className="text-gray-500 dark:text-slate-300 text-base lg:text-lg mt-6 font-medium
"
            >
              {toTitleCase(
                `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”`
              )}
            </p>
            {[{ Group28, Group27, Group29, Group30, Group31 }].map(
              (item, index) => (
                <div className="flex gap-2 items-center mt-6">
                  {[
                    item.Group28,
                    item.Group27,
                    item.Group28,
                    item.Group29,
                    item.Group30,
                    item.Group31,
                  ].map((src, i) => (
                    <img
                      key={i}
                      className="w-7 h-7 opacity-50 hover:opacity-100 transition-transform duration-300 transform hover:scale-150 cursor-pointer"
                      src={src}
                      alt={`Group ${i + 28}`}
                    />
                  ))}
                </div>
              )
            )}
            <h4 className="mt-6 text-black font-semibold text-lg">
              Nick Jonas
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
