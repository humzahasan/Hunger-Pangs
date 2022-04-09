import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";

import { CartReducer } from "../reducers/cart-reducer";

const CartContext = createContext({ itemInCart: [] });

const encodedToken = localStorage.getItem("token");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [state, dispatch] = useReducer(CartReducer, {
    cart,
  });

  useEffect(() => {
    encodedToken && getCart();
  }, []);

  const getCart = async () => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });

      if (res.status === 201) {
        setCart(res.data);
      }
    } catch (error) {
      toast.error("Oh no, failed to get your cart!");
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (res.status === 201) {
        dispatch({ type: "ADD_TO_CART", payload: product });
        toast.success("Item added to cart!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });

      if (res.status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: productId });
        toast.success("Item removed from cart!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const changeQuantity = async (productId, qty) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            qty,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (res.status === 200) {
        dispatch({
          type: "CHANGE_QUANTITY",
          payload: {
            id: productId,
            quantity: qty,
          },
        });
        toast.success("Item updated in cart!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
