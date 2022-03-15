import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Categories from "./Categories/Categories";
import Herosection from "./Herosection/Herosection";
import { Trendingitem } from "./Trendingitem/Trendingitem";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <h1>Homepage</h1>
      <Categories />
      <Herosection />
      <Trendingitem />
    </>
  );
};

export { Homepage };
