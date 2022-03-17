import React from "react";
import "./Herosection.css";
import HeroImage from "../../../assets/pasta.jpg";

const Herosection = () => {
  return (
    <div className="homepage-hero">
      <div className="hero-section">
        <img className="image" src={HeroImage} alt="food-item" />
      </div>
    </div>
  );
};

export default Herosection;
