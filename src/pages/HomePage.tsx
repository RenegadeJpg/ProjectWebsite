//import React from "react";
import IntroSection from "../components/Sections/IntoSection";
import BFprojects from "../components/BFprojects/BFprojects";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary-lighter/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto space-y-8">
        <IntroSection />
        <BFprojects />
      </div>
    </div>
  );
};

export default HomePage;
