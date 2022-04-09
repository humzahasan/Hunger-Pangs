const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const itemIndex = state.wishlist.findIndex((item) => {
        return item.name === action.payload.name;
      });

      if (itemIndex === -1) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      } else {
        return state;
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export { wishlistReducer };
