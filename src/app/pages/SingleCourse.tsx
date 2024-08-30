import React from "react";
import NavBar from "../components/NavBar";
import Footerr from "../components/footer";
import Hero from "../components/SingleHero";
import Tutor from "../components/tutor";

const HomePage = () => {
  return (
    <div className="bg-[#fff]">
      <NavBar />
      <Hero />
      <Tutor />
      <Footerr />
    </div>
  );
};

export default HomePage;
