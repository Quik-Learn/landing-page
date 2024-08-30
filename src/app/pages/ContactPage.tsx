import React from "react";

import NavBar from "../components/NavBar";

import Pricing from "../components/pricing";

import Faq from "../components/faq";
import Footerr from "../components/footer";
import Hero from "../components/HeroContact";
import ContactForm from "../components/ContactForm";
const ContactPage = () => {
  return (
    <div className="bg-[#fff]">
      <NavBar />

      <Hero />
      <ContactForm />

      <Footerr />
    </div>
  );
};

export default ContactPage;
