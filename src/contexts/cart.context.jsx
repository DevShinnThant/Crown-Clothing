import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen: () => null,
  cartItems:[],
  addItemToCart:() => null,
  cartCount:0,
  totalCost:0
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

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [totalCost,setTotalCost] = useState(0);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems,cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToRemove) => {
      setCartItems(clearCartItem(cartItems,cartItemToRemove));
    }

    useEffect(()=>{
      const counts = cartItems.reduce((total,cartItem) => total+cartItem.quantity ,0);
      setCartCount(counts);
    },[cartItems]);

    useEffect(()=>{
      const totalCost = cartItems.reduce((total,cartItem)=> total+ (cartItem.price * cartItem.quantity),0);
      setTotalCost(totalCost);
    },[cartItems])

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart,clearItemFromCart,totalCost};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}