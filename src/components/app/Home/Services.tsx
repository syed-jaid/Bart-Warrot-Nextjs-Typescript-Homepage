import Image from "next/image";
import React from "react";
import service1 from "../../media/service/service-1.png";
import service2 from "../../media/service/service-2.png";
import service3 from "../../media/service/service-3.png";
import Vector from "../../media/icons/Vector.png";

const Services = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <h1
        className="headerText text-center"
        style={{ maxWidth: "660px", marginInline: "auto" }}
      >
        Services Offered
      </h1>
      <p className="services-description text-p">
        We will help a client's problems to develop th e products they have with
        high quality
      </p>

      <div className="services-div">
        <div className="service-card">
          <div className="service-img">
            <Image src={service1} alt="" />
            <div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>SEO audits</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>Core Web Vitals optimizations</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>Structured data implementations </p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>SEO migrations</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>Sitespeed audits</p>
              </div>
            </div>
          </div>
          <h1>Tech SEO</h1>
        </div>
        <div className="service-card">
          <div className="service-img">
            <Image src={service2} alt="" />
            <div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>GTM audits</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>server side tagging</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>GTM setup</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>GA4 setup</p>
              </div>
            </div>
          </div>
          <h1>Tracking</h1>
        </div>
        <div className="service-card">
          <div className="service-img" style={{ gap: "0" }}>
            <Image src={service3} alt="" />
            <div style={{ marginTop: "15px" }}>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>Marketing dashboards</p>
              </div>
              <div className="service-points-div">
                <Image src={Vector} alt="" />
                <p>Looker Studio setup</p>
              </div>
            </div>
          </div>
          <h1>Dashboarding</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
