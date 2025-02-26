import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/HeroSection";
import UifryPremium from "./components/premiumFeature/Premium";
import WhyChooseUifry from "./components/whyChooseUifry/WhyChooseUs";

const RestOfCode = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <HeroSection />
      <UifryPremium />
      <WhyChooseUifry />
    </div>
  );
};

export default RestOfCode;
