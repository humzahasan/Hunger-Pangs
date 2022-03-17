import React from "react";
import { Navbar } from "../../components/indexComponent";
import { Categories, Herosection, Trendingitem } from "./homeIndex";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <Categories />
        <Herosection />
        <Trendingitem />
      </div>
    </>
  );
};

export { Homepage };
