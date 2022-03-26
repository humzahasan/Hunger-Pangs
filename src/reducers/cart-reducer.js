const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const getItemInCart = state.itemInCart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (getItemInCart === -1) {
        return {
          ...state,
          itemInCart: [
            ...state.itemInCart,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          itemInCart: state.itemInCart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemInCart: state.itemInCart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        itemInCart: state.itemInCart.map((item) => {
          console.log(item);
          return item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item;
        }),
      };

    default:
      return state;
  }
};

export { CartReducer };
