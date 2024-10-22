import React from "react";
import Portfolios from "./Portfolios";
import Experience from "./Experience";
import Services from "./Services";
import LetsTalk from "./LetsTalk";
import Footer from "@/components/core/Footer";

const HomeIndex = () => {
  return (
    <>
      <Portfolios />
      <Experience />
      <Services />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default HomeIndex;
