const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
      };
    case "LOW_To_HIGH":
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
      };
    case "FAST_DELIVERY":
      return {
        ...state,
        products: state.products.filter(
          (item) => item.tenMinutesDelivery === true
        ),
      };

    case "STANDARD_DELIVERY":
      return {
        ...state,
        products: state.products.filter(
          (item) => item.tenMinutesDelivery === false
        ),
      };

    default:
      return state;
  }
};

export { ProductReducer };
