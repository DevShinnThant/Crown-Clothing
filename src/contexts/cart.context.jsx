import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen: () => null,
  cartItems:[],
  addItemToCart:() => null,
  cartCount:0
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

const removeCartItem = (cartItems,productToRemove) => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);

  if(existingItem.quantity === 1){
    return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id )
  };

  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id ?
    {...cartItem,quantity : cartItem.quantity-1} : cartItem
  });
}

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
      setCartItems(removeCartItem(cartItems,productToRemove));
    }

    useEffect(()=>{
      const counts = cartItems.reduce((total,cartItem) => total+cartItem.quantity ,0);
      setCartCount(counts);
    },[cartItems])

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount,removeItemFromCart};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}