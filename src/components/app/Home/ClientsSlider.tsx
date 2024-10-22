import Image from "next/image";
import React from "react";
import client1 from "../../media/client/client1.png";
import client2 from "../../media/client/client2.png";
import client3 from "../../media/client/client3.png";
import client4 from "../../media/client/client4.png";
import client5 from "../../media/client/client5.png";
import client6 from "../../media/client/client6.png";
import bg from "../../media/client/client-bg.png";

const ClientsSlider = () => {
  const divStyle = {
    width: "100%",
    backgroundImage: `url('https://i.ibb.co.com/CKv0q3f/client-bg.png')`,
    marginBottom: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={divStyle}>
      <h2 className="client-header">Our clients & projects</h2>
      <div className="logos">
        <div className="logo_items">
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
        </div>
        <div className="logo_items">
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
          <Image src={client5} alt="" />
          <Image src={client6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
