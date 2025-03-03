import React from "react";
import start01 from "../../images/Star 1.png";
import start03 from "../../images/Star 3.png";
const Faqs = () => {
  const toTitleCase = (text: string) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const FaqsData = [
    {
      Id: 1,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      Id: 2,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      Id: 3,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      Id: 4,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      Id: 5,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      Id: 6,
      title: "the best financial accounting app ever!",
      description:
        "“ Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];
  return (
    <div className="py-10 px-6 md:px-10">
      {/* FAQ Title */}
      <img
        className="relative left-8 top-3 z-10 transition-transform duration-500 ease-in-out hover:rotate-180"
        src={start03}
        alt="star"
      />
      <div className="max-w-5xl mx-auto">
        <h4 className="text-red-500  uppercase text-base md:text-lg font-medium tracking-widest">
          FAQ
        </h4>
        <h2 className="text-3xl w-[90%] md:w-[497px] md:text-4xl lg:text-5xl font-extrabold text-black dark:text-slate-100 tracking-wider mt-2">
          Frequently Asked Questions
        </h2>
        {/* Decorative Image */}
        <img
          className="relative left-[60%] bottom-14 z-10 md:left-[57%]  transition-transform duration-500 ease-in-out hover:rotate-180"
          src={start01}
          alt="Decorative Star"
        />
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {FaqsData.map((faq, idx) => (
          <div
            key={faq.Id}
            className={`p-5 lg:p-7 rounded-lg hover:drop-shadow-lg cursor-pointer transition-all duration-300 ${
              [1, 4, 5].includes(faq.Id)
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="lg:text-[28px] text-3xl font-semibold">
              {toTitleCase(faq.title)}
            </h2>
            <p
              className={`text-lg mt-2 ${
                [2, 3, 6].includes(faq.Id) ? "text-black opacity-50" : " "
              }`}
            >
              {toTitleCase(faq.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
