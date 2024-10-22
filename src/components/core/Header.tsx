"use client";
import Image from "next/image";
import React, { useState } from "react";
import santolocrlLogo from "../media/icons/santolocrl-logo.png";
import mobileMenuIcon from "../media/icons/mobile-menu-icon.png";
import headerBg from "../media/images/header-light.png";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="header-div">
      <Image src={santolocrlLogo} alt="" />
      <div className="header-links">
        <Link href="#">Home</Link>
        <Link href="#">AboutUs</Link>
        <Link href="#">Services</Link>
        <Link href="#">Blog</Link>
      </div>
      <button className="custom-button header-button">Contact Now</button>
      <Image
        onClick={() => setShowMenu(!showMenu)}
        className="mobile-menu-icon"
        src={mobileMenuIcon}
        alt=""
      />
      {showMenu && (
        <div
          className="mobile-menu-icon"
          style={{
            background: "#ffffff18",
            backdropFilter: "blur(25px)",
            borderRadius: "10px",
            position: "absolute",
            right: "20px",
            top: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              fontSize: "15px",
              padding: "25px",
              fontWeight: "600",
            }}
          >
            <Link href="#">Home</Link>
            <Link href="#about">AboutUs</Link>
            <Link href="#">Services</Link>
            <Link href="#">Blog</Link>
            <button className="custom-button ">Contact Now</button>
          </div>
        </div>
      )}

      <Image className="headerImg" src={headerBg} alt="" />
    </div>
  );
};

export default Header;
