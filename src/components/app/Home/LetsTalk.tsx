import Image from "next/image";
import React from "react";
import PersonImage from "../../media/images/Bart-Warrot-let's-talk.png";
import LetsTallBG from "../../media/images/bg-light-left.png";

const LetsTalk = () => {
  return (
    <div className="lets-talk-div">
      <div>
        <h1 className="headerText">let's talk</h1>
        <p>
          Do you have some questions? Want to grab a coffee? Plan a call with
          the button below Book an Consultancy
        </p>
        <button className="custom-button">Book a Consultancy</button>
      </div>
      <Image className="person-image" src={PersonImage} alt="" />
      <Image className="lets-bg" src={LetsTallBG} alt="" />
    </div>
  );
};

export default LetsTalk;
