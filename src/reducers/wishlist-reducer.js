const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const itemIndex = state.itemInWishList.findIndex((item) => {
        return item.name === action.payload.name;
      });

      if (itemIndex === -1) {
        return {
          ...state,
          itemInWishList: [...state.itemInWishList, action.payload],
        };
      } else {
        return state;
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemInWishList: state.itemInWishList.filter(
          (item) => item.name !== action.payload.name
        ),
      };

    default:
      return state;
  }
};

export { wishlistReducer };
