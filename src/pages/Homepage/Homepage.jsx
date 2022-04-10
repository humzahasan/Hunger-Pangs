import React, { useEffect } from "react";
import { Navbar } from "../../components/index";
import { useAuth } from "../../context";
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
