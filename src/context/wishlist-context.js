import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const defaultContextValue = { itemInWishlist: [] };

const WishlistContext = createContext(defaultContextValue);

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { itemInWishList: [] });
  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
