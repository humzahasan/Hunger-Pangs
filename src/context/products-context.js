import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({ products: [] });

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState({});

  const getProducts = async () => {
    const products = await axios.get("/api/products");
    await setProductList(products.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={productList}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
