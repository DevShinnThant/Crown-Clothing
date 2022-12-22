import { createContext, useEffect, useReducer, useState } from "react";

import { createAction } from "../utils/firebase/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen:false,
  toggleCartOpen: () => null,
  cartItems:[],
  addItemToCart:() => null,
  removeItemFromCart:()=>null,
  clearItemFromCart:()=>null,
  cartCount:0,
  cartTotal:0
});

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
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS : 'SET_CART_ITEMS',
  TOGGLE_CART_OPEN : 'TOGGLE_CART_OPEN'
}

const cartReducer = (state,action) => {
   const {type,payload} = action;

   switch (type) {
     case CART_ACTION_TYPES.SET_CART_ITEMS :
       return {
         ...state,
         ...payload
       };
      case CART_ACTION_TYPES.TOGGLE_CART_OPEN :
         return {
          ...state,
          isCartOpen: !state.isCartOpen
         };
     default :
       throw new Error('Unhandle type with cart reducer');
   }
};

const INITIAL_STATE = {
  isCartOpen:false,
  cartItems:[],
  cartCount:0,
  cartTotal:0
}

export const CartProvider = ({children}) => {
    const [{isCartOpen,cartItems,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE);

    const updateCartItemsReducer = (cartItems) => {
      const cartCount = cartItems.reduce((total,cartItem) => total+cartItem.quantity ,0);
    
      const cartTotal = cartItems.reduce((total,cartItem)=> total+ (cartItem.price * cartItem.quantity),0);
       
      dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
          cartItems,
          cartCount,
          cartTotal
        })
        )
    }

    const addItemToCart = (productToAdd) => {
     const Items = addCartItem(cartItems,productToAdd);
     updateCartItemsReducer(Items);
    };

    const removeItemFromCart = (cartItemToRemove) => {
     const Items = removeCartItem(cartItems,cartItemToRemove);
     updateCartItemsReducer(Items);
    };

    const clearItemFromCart = (cartItemToRemove) => {
      const Items = clearCartItem(cartItems,cartItemToRemove);
      updateCartItemsReducer(Items);
    };

    const toggleCartOpen = () => {
      dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN))
    };
    
    const value = {isCartOpen,toggleCartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart,clearItemFromCart,cartTotal};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}