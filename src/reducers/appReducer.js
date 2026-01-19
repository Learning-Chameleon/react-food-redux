export function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
        background: action.payload === "light" ? "#fff" : "#333",
        color: action.payload === "light" ? "#333" : "#fff",
      };
    case "ADD_TO_CART": {
      let index = state?.cart?.findIndex(
        (item) => item.name === action.payload.name
      );

      if (index > -1) {
        // Use .map() to create a new array AND a new object for the updated item
        const newCart = state.cart.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });

        return { ...state, cart: newCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.payload.name),
      };
    default:
      return state;
  }
}
