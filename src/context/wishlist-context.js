import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { wishlistReducer } from "../reducers/wishlist-reducer";
import { useAuth } from "./auth.context";

const defaultContextValue = { itemInWishlist: [] };

const WishlistContext = createContext(defaultContextValue);

const WishlistProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [wishlist, setWishlist] = useState([]);
  const { getToken } = useAuth();

  const [state, dispatch] = useReducer(wishlistReducer, { wishlist });

  const addToWishlist = async (product) => {
    try {
      const res = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: getToken(),
          },
        }
      );

      if (res.status === 201) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: product });
        toast.success("Item added to wishlist!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.log(error.response);
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: getToken(),
        },
      });

      if (res.status === 200) {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
        toast.success("Item removed from wishlist!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.log(error.response);
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  return (
    <WishlistContext.Provider
      value={{ state, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
