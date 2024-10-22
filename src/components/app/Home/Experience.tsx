import React from "react";
import image1 from "../../media/experience/experience-1.png";
import image2 from "../../media/experience/experience-2.png";
import image3 from "../../media/experience/experience-3.png";
import image4 from "../../media/experience/experience-4.png";
import image5 from "../../media/experience/experience-5.png";
import image6 from "../../media/experience/experience-6.png";
import image7 from "../../media/experience/experience-7.png";
import image8 from "../../media/experience/experience-8.png";
import image9 from "../../media/experience/experience-9.png";
import image10 from "../../media/experience/experience-10.png";
import experienceBg from "../../media/images/bg-light-right.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <div>
        <h1
          className="headerText text-center"
          style={{ maxWidth: "660px", marginInline: "auto" }}
        >
          Technologies/Tools I Use Or Have Experience With
        </h1>
        <div className="experience-images-div">
          <Image src={image1} alt="" />
          <Image src={image2} alt="" />
          <Image src={image3} alt="" />
          <Image src={image4} alt="" />
          <Image src={image5} alt="" />
          <Image src={image6} alt="" />
          <Image src={image7} alt="" />
          <Image src={image8} alt="" />
          <Image src={image9} alt="" />
          <Image src={image10} alt="" />
        </div>
      </div>
      <Image className="experience-bg" src={experienceBg} alt="" />
    </div>
  );
};

export default Experience;
