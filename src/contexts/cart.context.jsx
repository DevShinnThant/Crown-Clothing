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

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
    }

    useEffect(()=>{
      const counts = cartItems.reduce((total,cartItem) => total+cartItem.quantity ,0);
      setCartCount(counts);
    },[cartItems])

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}