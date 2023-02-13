import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/firebase/reducer/reducer.utils";

import { CART_ACTION_TYPES, CartItem } from "./cart.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CartItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export type ToggleCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type AddItemToCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type RemoveItemFromCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItem = withMatcher((cartItems: CartItem[]) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
});

export const toggleCartOpen = withMatcher(
  (boolean: boolean): ToggleCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CartItem): AddItemToCart => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItem(newCartItems);
  }
);

export const removeItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem): RemoveItemFromCart => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItem(newCartItems);
  }
);

export const clearItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItem(newCartItems);
  }
);
