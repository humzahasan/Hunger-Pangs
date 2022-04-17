const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        products: action.payload.products,

        finalProductList: action.payload.products,
      };
    case "UPDATE_DATA":
      return { ...state, ...action.payload };
    case "CLEAR_ALL":
      return { ...state, finalProductList: state.products };

    default:
      return state;
  }
};

export { ProductReducer };
