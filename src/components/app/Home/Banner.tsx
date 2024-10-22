import Image from "next/image";
import React from "react";
import numberImage from "../../media/icons/number.png";
import BartWarrot from "../../media/images/Bart-Warrot-banner.png";
import bg from "../../media/images/Gradient-banner.png";

const Banner = () => {
  return (
    <div className="banner-div">
      <div>
        <div className="outer-gradient">
          <div className="inner-text">Marketing Tech Expert</div>
        </div>
        <h1 className="headerText">Hi There! Bart Warrot </h1>
        <h3 className="banner-sub-header">Tech meets Marketing</h3>
        <div className="banner-info">
          <button className="custom-button">Book an Consultancy</button>
          <div className="footer-contract">
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Image src={numberImage} alt="" />
              <div style={{ gap: "5px" }}>
                <p className="title">contact for project</p>
                <p className="info">1-929-269-1487</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="banner-image" src={BartWarrot} alt="" />
      <Image className="banner-image-bg" src={bg} alt="" />
    </div>
  );
};

export default Banner;
