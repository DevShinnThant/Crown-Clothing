import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartOpen = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems 
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total,cartItem) => total+cartItem.quantity ,0)
);
    
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total,cartItem)=> total+ (cartItem.price * cartItem.quantity),0)
);;

