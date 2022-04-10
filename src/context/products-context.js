import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ProductReducer } from "../reducers/product-reducer";

const ProductsContext = createContext({ products: [] });

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState({});

  const [state, dispatch] = useReducer(ProductReducer, {
    productList,
  });

  const getProducts = async () => {
    const res = await axios.get("/api/products");
    setProductList(res.data);
    dispatch({ type: "SET_DATA", payload: res.data });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
