import React from "react";
import Portfolios from "./Portfolios";
import Experience from "./Experience";
import Services from "./Services";
import LetsTalk from "./LetsTalk";
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ClientsSlider from "./ClientsSlider";

const HomeIndex = () => {
  return (
    <>
      <Header />
      <Banner />
      <ClientsSlider />
      <AboutMe />
      <Portfolios />
      <Experience />
      <Services />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default HomeIndex;
