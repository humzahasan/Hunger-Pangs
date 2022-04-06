import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const defaultContextValue = { itemInWishlist: [] };

const WishlistContext = createContext(defaultContextValue);

const encodedToken = localStorage.getItem("token");

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [state, dispatch] = useReducer(wishlistReducer, { wishlist });

  useEffect(() => {
    encodedToken && getWishlist();
  }, []);

  const getWishlist = async () => {
    try {
      const res = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });

      if (res.status === 201) {
        setWishlist(res.data);
      }
    } catch (error) {
      toast.error("Oh no, failed to get your cart!");
    }
  };

  const addToWishlist = async (product) => {
    try {
      const res = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: encodedToken,
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
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });

      if (res.status === 200) {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
        toast.success("Item removed from wishlist!");
      } else {
        toast.warning("Something went wrong. Please try again!");
      }
    } catch (error) {
      toast.error("Oh no! It's not you, it's me.");
    }
  };

  return (
    <WishlistContext.Provider
      value={{ state, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
