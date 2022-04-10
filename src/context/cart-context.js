import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./auth.context";
import { CartReducer } from "../reducers/cart-reducer";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({ itemInCart: [] });

const CartProvider = ({ children }) => {
  const { getToken } = useAuth();

  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });

  const getCart = async () => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: {
          authorization: getToken(),
        },
      });

      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (error) {
      toast.warning("Something went wrong. Please try again!");
      console.log(error.response);
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: getToken(),
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
      console.log(error.response);
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: getToken(),
        },
      });

      if (res.status === 200) {
        dispatch({ type: "REMOVE_FROM_CART", payload: productId });
        toast.success("Item removed from cart!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.log(error.response);
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
            authorization: getToken(),
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
      console.log(error.response);
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        getCart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
