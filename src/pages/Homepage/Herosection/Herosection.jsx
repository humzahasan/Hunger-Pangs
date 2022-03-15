import React from "react";
import "./Herosection.css";
import HeroImage from "../../../assets/pasta.jpg";

const Herosection = () => {
  return (
    <>
      <div class="hero-section">
        <img class="image" src={HeroImage} alt="food-item" />
      </div>
    </>
  );
};

export default Herosection;
