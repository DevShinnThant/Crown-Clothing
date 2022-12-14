import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen: () => null,
  cartItems:[],
  addItemToCart:() => null
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

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
      console.log(cartItems);
    }

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}