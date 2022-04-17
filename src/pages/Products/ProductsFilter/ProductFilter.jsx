/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../context";
import "./ProductFilter.css";

const ProductFilter = () => {
  const { getUpdatedProducts } = useProducts();

  const categoryList = [
    "all",
    "ice-cream",
    "burger-&-wraps",
    "momo",
    "biryani",
    "north-indian",
  ];

  const { category } = useParams();
  const [rating, setRating] = useState(3);
  const [modifyProduct, setModifyProduct] = useState({
    sortBy: "",
    filterBy: "all",
    rating: 3,
    clearAll: false,
  });

  useEffect(() => {
    getUpdatedProducts(modifyProduct);
  }, [modifyProduct]);

  useEffect(() => {
    if (category) {
      setModifyProduct({ ...modifyProduct, filterBy: category });
    } else {
      getUpdatedProducts(modifyProduct);
    }
  }, [category]);
  return (
    <div className="grid-item">
      <div className="filter-section">
        <div className="row-flex">
          <p className="regular-text">Filters</p>
          <p
            className="cta-text"
            onClick={(e) => {
              setModifyProduct({
                ...modifyProduct,
                clearAll: true,
              });
            }}
          >
            Clear
          </p>
        </div>

        <section
          className="filter-sortby"
          onClick={(e) => {
            setModifyProduct({
              ...modifyProduct,
              sortBy: e.target.value,
              clearAll: false,
            });
          }}
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
        <section
          className="filter-sortby"
          onClick={(e) => {
            setModifyProduct({
              ...modifyProduct,
              rating: Number(e.target.value),
              clearAll: false,
            });
          }}
          style={{ width: "50%" }}
        >
          <p className="sm-text">Filter By Rating</p>
          <input
            type="range"
            list="tickmarks"
            className="slider"
            value={rating}
            min={0}
            max={5}
            step={1}
            onChange={(e) => setRating(Number(e.target.value))}
          />
          <output id="num">{rating}</output>
        </section>

        <section
          className="filter-sortby"
          onClick={(e) => {
            setModifyProduct({
              ...modifyProduct,
              filterBy: e.target.value,
              clearAll: false,
            });
          }}
        >
          <p className="sm-text">Filter By Categories</p>
          {categoryList.map((item, index) => (
            <label className="input-radio" key={index}>
              {item.split("-").join(" ").toUpperCase()}
              <input type="radio" name="category" value={item} />
              <span className="radio-btn"></span>
            </label>
          ))}
        </section>
      </div>
    </div>
  );
};

export { ProductFilter };
