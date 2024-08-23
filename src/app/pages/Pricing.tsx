import React from "react";
import NavBar from "../components/NavBar";

import Pricing from "../components/pricing";

import Faq from "../components/faq";
import Footerr from "../components/footer";

const PricePage = () => {
  return (
    <div className="bg-[#fff]">
      <NavBar />

      <Pricing />

      <Faq />
      <Footerr />
    </div>
  );
};

export default PricePage;
