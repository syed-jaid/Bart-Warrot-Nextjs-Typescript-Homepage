import Image from "next/image";
import React from "react";
import santolocrlLogo from "../media/icons/santolocrl-logo.png";
import emailImage from "../media/icons/email.png";
import numberImage from "../media/icons/number.png";
import social1 from "../media/icons/fb.png";
import social2 from "../media/icons/x.png";
import social3 from "../media/icons/insta.png";

const Footer = () => {
  return (
    <div style={{ paddingInline: "20px", paddingBottom: "20px" }}>
      <div className="footer-main-dev">
        <div className="footer-top">
          <div style={{ maxWidth: "350px", width: "100%" }}>
            <Image src={santolocrlLogo} alt="" />
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
            </p>
          </div>
          <div className="footer-contract">
            <h6>Contact & Information</h6>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={emailImage} alt="" />
              <div>
                <p className="title">Email Address</p>
                <p className="info">santolocorl@gmail.com </p>
              </div>
            </div>
          </div>
          <div className="footer-contract">
            <h6 style={{ opacity: 0 }}>Number</h6>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={numberImage} alt="" />
              <div>
                <p className="title">Phone Number</p>
                <p className="info">1-929-269-1487</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©SANTOLOCORL . All Right Reserved </p>
          <div>
            <p>FOllow ME on</p>
            <Image src={social1} alt="" />
            <Image src={social2} alt="" />
            <Image src={social3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
