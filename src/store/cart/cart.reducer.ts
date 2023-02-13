import { AnyAction } from "redux";
import { setCartItem, toggleCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (toggleCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItem.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
