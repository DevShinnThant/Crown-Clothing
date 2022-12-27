import {createAction} from '../../utils/firebase/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems,productToAdd) => {
    const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  
    if(existingItem){
      return cartItems.map((item) => {
         return item.id === productToAdd.id ?
           {
            ...item,quantity : item.quantity + 1
          } : item
      })
    }
    return [...cartItems,{...productToAdd,quantity : 1}]
};

const removeCartItem = (cartItems,cartItemToRemove) => {
    const existingItem = cartItems.find((item) => item.id === cartItemToRemove.id);
  
    if(existingItem.quantity === 1){
      return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id )
    };
  
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToRemove.id ?
      {...cartItem,quantity : cartItem.quantity-1} : cartItem
    });
}; 
  
const clearCartItem = (cartItems,cartItemToRemove) => {
    return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id )
};

export const toggleCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_CART_OPEN,boolean);
  
export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
};

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems,cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const clearItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems,cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};


