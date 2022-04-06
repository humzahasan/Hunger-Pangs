const CartReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_CART":
      const getItemInCart = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (getItemInCart === -1) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
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
