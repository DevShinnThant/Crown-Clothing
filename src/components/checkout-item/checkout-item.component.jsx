import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { Arrow, CheckoutItemContainer, Column, ImageContainer, Quantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({item}) => {
    const {name,quantity,price,imageUrl} = item;
    const {addItemToCart,removeItemFromCart,clearItemFromCart} = useContext(CartContext);

    const addItemHandler = () => {
        addItemToCart(item)
    };

    const removeItemHandler = () => {
        removeItemFromCart(item)
    };
    
    const clearItemHandler = () => {
        clearItemFromCart(item)
    }

    return (
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
          </ImageContainer>
          <Column>{name}</Column>
          <Quantity>
            <Arrow onClick={removeItemHandler}>
              &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>
              &#10095;
            </Arrow>
          </Quantity>
          <Column>{price}</Column>
          <RemoveButton onClick={clearItemHandler}>
          &#10005;
          </RemoveButton>
      </CheckoutItemContainer>
    )
};

export default CheckoutItem;