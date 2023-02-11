import { AnyAction } from "redux";
import { addItemToCart, toggleCartOpen } from "./cart.action";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (toggleCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  // if(addItemToCart.match(action)){
  //   return {
  //           ...state,
  //           cartItems: action.payload,
  //         };
  // }
  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   case CART_ACTION_TYPES.SET_CART_OPEN:
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };
  //   default:
  //     return state;
  // }
};
