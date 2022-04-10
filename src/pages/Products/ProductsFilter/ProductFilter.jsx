import React, { useState } from "react";
import { useProducts } from "../../../context";
import "./ProductFilter.css";

const ProductFilter = () => {
  // const categoryListValue = [
  //   "burgers-&-wraps",
  //   "beverages",
  //   "sweet-tooth",
  //   "recommended",
  //   "biryani",
  //   "sides",
  //   "chicken-wings",
  //   "momo",
  //   "whopper",
  //   "shirin-&-sherbet",
  // ];
  const { dispatch, getSortedData } = useProducts();
  const [tenMin, setTenMin] = useState(false);
  const [outOfStock, setoutOfStock] = useState(false);
  const [trending, setTrending] = useState(false);

  return (
    <div className="grid-item">
      <div className="filter-section">
        <div className="row-flex">
          <p className="regular-text">Filters</p>
          <p className="cta-text">Clear</p>
        </div>

        <section
          className="filter-sortby"
          onClick={(e) => getSortedData(e.target.value)}
        >
          <p className="sm-text">Sort By Price</p>
          <label className="input-radio">
            High to Low
            <input type="radio" name="price" value="HIGH_TO_LOW" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Low to High <input type="radio" name="price" value="LOW_TO_HIGH" />
            <span className="radio-btn"></span>
          </label>
        </section>
        <section className="filter-sortby">
          <p className="sm-text">Sort By Delivery Time</p>
          <label className="input-radio">
            Fast Delivery
            <input type="radio" name="delivery" value="FAST_DELIVERY" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Standard Delivery{" "}
            <input type="radio" name="delivery" value="STANDARD_DELIVERY" />
            <span className="radio-btn"></span>
          </label>
        </section>
        <section className="filter-sortby">
          <p className="sm-text">Filter By</p>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="tenMinDelivery"
              checked={tenMin}
              onChange={(e) => {
                setTenMin(!tenMin);

                !tenMin && dispatch({ type: e.target.value });
              }}
              value="TEN_MINUTES_DELIVERY"
            />
            <label htmlFor="tenMinDelivery">10 Minutes Delivery</label>
          </div>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="outOfStock"
              checked={outOfStock}
              onChange={(e) => {
                setoutOfStock(!outOfStock);

                !outOfStock && dispatch({ type: e.target.value });
              }}
              value="OUT_OF_STOCK"
            />
            <label htmlFor="outOfStock">Out of Stock</label>
          </div>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="trending"
              checked={trending}
              onChange={(e) => {
                setTrending(!trending);

                !trending && dispatch({ type: e.target.value });
              }}
              value="OUT_OF_STOCK"
            />
            <label htmlFor="trending">Trending</label>
          </div>
        </section>
      </div>
    </div>
  );
};

export { ProductFilter };
