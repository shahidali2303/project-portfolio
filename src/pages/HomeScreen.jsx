import React from "react";
import HeroSection from "../components/HeroSection";
import MySkills from "../components/MySkills";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <MySkills />
      <About />
      <Portfolio />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomeScreen;
