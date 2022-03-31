import React from "react";
import "./Herosection.css";
import HeroImage from "../../../assets/pasta.jpg";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="hero-section">
      <img className="image" src={HeroImage} alt="food-item" />
      <Link to="/products" className="btn btn-primary btn-2x btn-hero">
        Show All Products
      </Link>
    </div>
  );
};

export default Herosection;
