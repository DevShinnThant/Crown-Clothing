import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({item}) => {
    const {addItemToCart,removeItemFromCart} = useContext(CartContext);

    const addItemHandler = () => {
        addItemToCart(item)
    };

    const removeItemHandler = () => {
        removeItemFromCart(item)
    }

    return (
        <div>
        <h2>{item.name}</h2>
        <span onClick={addItemHandler}>increase</span>
        <span onClick={removeItemHandler}>decrease</span>
      </div>
    )
};

export default CheckoutItem;