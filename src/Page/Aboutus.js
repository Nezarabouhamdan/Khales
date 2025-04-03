import React from "react";
import { Heroimg, Herosection } from "./Faqs";
import img2 from "../assets/faq.jpg";
import SectionAboutUs3 from "../components/Whoweare/SectionAboutUs3";
import AboutSection from "../components/aboutuscompnet2/AboutSection";
import MissionVisionSection from "../components/aboutuscomponetn1/MissionVisionSection";

function Aboutus() {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <AboutSection />
      <MissionVisionSection />
    </>
  );
}

export default Aboutus;
