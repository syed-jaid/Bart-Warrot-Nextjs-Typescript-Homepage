import Image from "next/image";
import React from "react";
import rightArrow from "../../media/icons/arrow-right.png";

const Portfolios = () => {
  const portfolioData = [
    {
      cardImage: "https://i.ibb.co/yfj6PC2/Portfolio-card-1.png",
      title: "VPN Software",
      subTitle: "Network",
    },
    {
      cardImage: "https://i.ibb.co.com/GJTqRY7/Portfolio-card-2.png",
      title: "Streaming Software",
      subTitle: "Streaming",
    },
    {
      cardImage: "https://i.ibb.co.com/tcXvGRy/Portfolio-card-3.png",
      title: "Fintech Software",
      subTitle: "Fintech",
    },
    {
      cardImage: "https://i.ibb.co.com/jMNVPhh/Portfolio-card-4.png",
      title: "Podcast Mobile App",
      subTitle: "Fintech",
    },
    {
      cardImage: "https://i.ibb.co.com/4RyshHG/Portfolio-card-5.png",
      title: "Multimedia Design Platf...",
      subTitle: "Fintech",
    },
    {
      cardImage: "https://i.ibb.co.com/pwncCLh/Portfolio-card-6.png",
      title: "Parking Mobile App",
      subTitle: "Network",
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="headerText">My Portfolio</h1>
        <div className="see-all">
          <p>See All</p>
          <Image src={rightArrow} alt="arrow right" width={18} height={18} />
        </div>
      </div>

      <div className="portfolio-cards-container">
        {portfolioData.map((card, index) => (
          <div className="portfolio-card" key={index}>
            <img src={card.cardImage} alt={`${card.title} image`} />
            <div>
              <h6>{card.title}</h6>
              <p>{card.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
