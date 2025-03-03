import React from "react";
import { useState, useEffect } from "react";
// import { FiSun, FiMoon } from "react-icons/fi";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/HeroSection";
import UifryPremium from "./components/premiumFeature/Premium";
import WhyChooseUifry from "./components/whyChooseUifry/WhyChooseUs";
import Customizable from "./components/fullyCustomizable/Customize";
import UserReviews from "./components/uifryUserReviews/UserReviews";
import Faqs from "./components/FAQs/Faqs";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";

const RestOfCode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div
      className={`mx-auto ${
        theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      {/* Dark Mode Toggle - Fixed Position */}

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="z-10 p-2 w-10 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white  shadow-lg absolute right-5 md:right-2 lg:right-5  top-20 md:top-5 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? "  ☀︎" : "☽"}
      </button>
      <HeroSection />
      <UifryPremium />
      <WhyChooseUifry />
      <Customizable />
      <UserReviews />
      <Faqs />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default RestOfCode;
