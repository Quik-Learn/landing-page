import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Explore from "../components/explore";
import Pricing from "../components/pricing";
import Why from "../components/why";
import Testimonials from "../components/Testimonials";
import Faq from "../components/faq";
import Footerr from "../components/footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Explore />
      <Pricing />
      <Why />

      <Testimonials />
      <Faq />
      <Footerr />
    </>
  );
};

export default HomePage;
