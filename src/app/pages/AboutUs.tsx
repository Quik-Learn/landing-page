import React from "react";

import NavBar from "../components/NavBar";
import Footerr from "../components/footer";
import Hero from "../components/HeroAbout";
import Goals from "../components/Goals";
import Together from "../components/Together";
import Pricing from "../components/pricing";

const AboutUs = () => {
  return (
    <div className="bg-[#fff]">
      <NavBar />
      <Hero />

      <Goals />
      <Pricing />
      <Together />
      <Footerr />
    </div>
  );
};

export default AboutUs;
