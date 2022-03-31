import React from "react";
import "./Products.css";

import { Navbar } from "../../components/index-component";
import { ProductFilter } from "./ProductsFilter/ProductFilter";
import { ProductsListing } from "./ProductsListing/ProductsListing";

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <div className="grid-col-2 grid-col-3by7 product-container">
          <ProductFilter />
          <ProductsListing />
        </div>
      </main>
    </>
  );
};

export { Products };
