import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/cart-reducer";

const CartContext = createContext({ itemInCart: [] });

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    itemInCart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
