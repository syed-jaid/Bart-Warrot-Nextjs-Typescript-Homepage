import Image from "next/image";
import React from "react";
import BartImage from "../../media/images/Bart-Warrot-about.webp";
import bgLight from "../../media/images/bg-light-right.png";

const AboutMe = () => {
  return (
    <div>
      <div id="about" className="about-me-div">
        <Image src={BartImage} alt="" />
        <div className="about-hero-info">
          <h1 className="headerText">Bart Warrot</h1>
          <h5 className="sub-header">Tech Meets Marketing</h5>
          <p className="about-discrp">
            I’m a developer by background who turned into marketing. My
            specialties really shine in the technical side of marketing. I’m a
            good bridge between the marketing & development teams in companies.
          </p>
          <div className="about-project">
            <div>
              <h1 className="headerText">40+</h1>
              <p>Completed Projects</p>
            </div>
            <div>
              <h1 className="headerText">17+</h1>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <button className="custom-button">Read More</button>
        </div>
      </div>
      <Image className="aboutMe-bg" src={bgLight} alt="" />
    </div>
  );
};

export default AboutMe;
