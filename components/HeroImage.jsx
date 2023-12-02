import React from "react";
import "../css/hero.css";
import imageMen from "../images/img-men.jpg";

const HeroImage = () => {
  return (
    <>
      <div className="hero">
        <div className="keterangan">
          <h3>judul Hero</h3>
        </div>
        <div className="img-hero">
          <img src={imageMen} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
