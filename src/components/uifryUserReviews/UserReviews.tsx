import React, { useState } from "react";
import UserReview_Uifry_grandiant from "../../images/Group 1000002356.png";
import UserReview_uifry_TriCircle from "../../images/uifry_premiumTriCircles.png";
import UserRiviewsHoldOn_Img from "../../images/Group 1000002331.png";
import start01 from "../../images/Star 1.png";
import Group28 from "../../images/Group 28.png";
import Group27 from "../../images/Group 27.png";
import Group29 from "../../images/Group 29.png";
import Group30 from "../../images/Group 30.png";
import Group31 from "../../images/Group 31.png";
import { motion } from "framer-motion";
import "./UserReviews.css";
const UserReviews = () => {
  const [selectedName, setSelectedName] = useState("Nick Jonas");
  const [direction, setDirection] = useState(1);
  const handleClick = (name: any, index: any) => {
    setDirection(index % 2 === 0 ? 1 : -1); // Alternate direction
    setSelectedName(name);
  };
  const Users = [
    { src: Group28, name: "Nick Jonas" },
    { src: Group27, name: "Akmal Hussain" },
    { src: Group29, name: "jameel Ahmad" },
    { src: Group30, name: "Shahid Iqbal" },
    { src: Group31, name: "Ali Faraaz" },
  ];

  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div className=" py-6 px-4 md:px-2 lg:px-20">
      <div className="w-[90%] md:w-[455px] md:text-center mx-5 md:mx-auto">
        <img
          className="relative left-[40%] bottom-6 z-10 md:left-[100%] md:bottom-6 transition-transform duration-500 ease-in-out hover:rotate-180"
          src={start01}
          alt="start 01"
        />
        <p className="uppercase text-lg text-black dark:text-slate-300 font-medium tracking-wider">
          testimonial
        </p>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          {toTitleCase(`what our users say about us?`)}
        </h1>
      </div>
      <section className="relative flex flex-col md:flex-row items-center md:justify-center md:mt-16 lg:mt-20">
        {/* User Rieviews Circle Background */}
        <div className="relative md:w-2/4 mt-20 md:mt-0 pb-16 -16 md:pb-0">
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

        <div className="md:w-2/4 lg:ml-4 ml-[-16px] w-[90%]">
          <div className="lg:w-[442px]  md:mr-2 lg:ml-20 md:ml-2">
            <h3 className="text-[28px] leading-[28px] font-semibold text-dark:">
              {toTitleCase("the best financial accounting app ever!")}
            </h3>
            <p
              className="text-gray-500 dark:text-slate-300 text-base lg:text-lg mt-6 font-medium
"
            >
              {toTitleCase(
                `“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”`
              )}
            </p>
            <div className="flex gap-2 items-center mt-6">
              {Users.map((user, i) => (
                <img
                  key={i}
                  className={`w-7 h-7 opacity-50 hover:opacity-100 transition-transform duration-300 transform hover:scale-150  cursor-pointer`}
                  src={user.src}
                  alt={user.name}
                  onMouseEnter={() => handleClick(user.name, i)}
                />
              ))}
            </div>
            {/*User Name Animation */}
            <motion.h4
              key={selectedName}
              className="mt-6 text-black dark:text-slate-300 font-semibold text-lg"
              initial={{ opacity: 0, x: direction * -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * 50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {selectedName}
            </motion.h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserReviews;
