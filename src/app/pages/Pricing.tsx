import React from "react";
import NavBar from "../components/NavBar";

import Pricing from "../components/pricing";

import Faq from "../components/faq";
import Footerr from "../components/footer";
import Hero from "../components/HeroResourse";
import Resource from "../components/Resource";

const PricePage = () => {
  return (
    <div className="bg-[#fff]">
      <NavBar />

      <Hero />

      <Resource />
      <Footerr />
    </div>
  );
};

export default PricePage;
