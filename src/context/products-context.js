import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductReducer } from "../reducers/product-reducer";

const ProductsContext = createContext({
  products: [],
  finalProductList: [],
});

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, {
    products: [],
    finalProductList: [],
  });
  const getProducts = async () => {
    const res = await axios.get("/api/products");

    dispatch({ type: "SET_DATA", payload: res.data });
  };

  const sortByRating = (rating) => {
    return {
      ...state,
      finalProductList: state.products.filter(
        (item) => item.rating === Number(rating)
      ),
    };
  };

  const sortProducts = (sorter, ratedData) => {
    switch (sorter) {
      case "HIGH_TO_LOW":
        return {
          ...state,
          finalProductList: ratedData.finalProductList.sort(
            (a, b) => b.price - a.price
          ),
        };
      case "LOW_TO_HIGH":
        return {
          ...state,
          finalProductList: ratedData.finalProductList.sort(
            (a, b) => a.price - b.price
          ),
        };
      case "NONE":
        return { ...state, finalProductList: state.products };
      default:
        return ratedData;
    }
  };

  const filterProducts = (sortedData, filterBy) => {
    if (filterBy === "all") {
      return { ...state, finalProductList: sortedData.finalProductList };
    } else {
      if (sortedData.finalProductList.length > 0) {
        return {
          ...state,
          finalProductList: sortedData.finalProductList.filter(
            (item) => item.category === filterBy
          ),
        };
      } else {
        return {
          ...state,
          finalProductList: sortedData.products.filter(
            (item) => item.category === filterBy
          ),
        };
      }
    }
  };

  const getUpdatedProducts = ({
    sortBy,
    filterBy,
    rating,
    clearAll = false,
  }) => {
    if (clearAll === true) {
      dispatch({ type: "CLEAR_ALL" });
    } else {
      const ratedData = sortByRating(rating);

      const sortedData = sortProducts(sortBy, ratedData);

      const filterData = filterProducts(sortedData, filterBy);

      dispatch({ type: "UPDATE_DATA", payload: filterData });
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        getUpdatedProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
