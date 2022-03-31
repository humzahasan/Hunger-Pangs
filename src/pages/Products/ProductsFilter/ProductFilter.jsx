import React from "react";

const ProductFilter = () => {
  return (
    <div className="grid-item">
      <div className="filter-section">
        <div className="row-flex">
          <p className="regular-text">Filters</p>
          <p className="cta-text">Clear</p>
        </div>
        <section className="filter-price">
          <p className="sm-text">Price</p>
          <input
            type="range"
            name="price"
            id="price-filter"
            list="price-range"
            min="50"
            max="1000"
            step="50"
          />
          <datalist id="price-range">
            <option value="50"></option>
            <option value="100"></option>
            <option value="200"></option>
            <option value="250"></option>
            <option value="300"></option>
            <option value="350"></option>
            <option value="400"></option>
            <option value="450"></option>
            <option value="500"></option>
            <option value="550"></option>
            <option value="600"></option>
          </datalist>
        </section>
        <section className="filter-catergory">
          <p className="sm-text">Catergory</p>
          <div className="input-checkbox">
            <input type="checkbox" id="north-indian" value={"north-indian"} />
            <label htmlFor="north-indian">North Indian</label>
          </div>
          <div className="input-checkbox">
            <input type="checkbox" id="wow-momo" value={"wow-momo"} />
            <label htmlFor="wow-momo">Chinese</label>
          </div>
          <div className="input-checkbox">
            <input type="checkbox" id="burger-king" value={"burger-king"} />
            <label htmlFor="burger-king">Fast Food</label>
          </div>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="baskin-robbins"
              value={"baskin-robbins"}
            />
            <label htmlFor="baskin-robbins">Ice Cream</label>
          </div>
        </section>
        <section className="filter-rating">
          <p className="sm-text">Rating</p>
          <label className="input-radio">
            One Pizza <input type="radio" name="rating" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Two Pizza <input type="radio" name="rating" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Three Pizza
            <input type="radio" name="rating" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Four Pizza <input type="radio" name="rating" />
            <span className="radio-btn"></span>
          </label>
        </section>
        <section className="filter-sortby">
          <p className="sm-text">Sort By</p>
          <label className="input-radio">
            Price - High to Low
            <input type="radio" name="radio" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Price - Low to High <input type="radio" name="radio" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Delivery Time - High to Low
            <input type="radio" name="radio" />
            <span className="radio-btn"></span>
          </label>
          <label className="input-radio">
            Delivery Time - Low to High <input type="radio" name="radio" />
            <span className="radio-btn"></span>
          </label>
        </section>
      </div>
    </div>
  );
};

export { ProductFilter };
