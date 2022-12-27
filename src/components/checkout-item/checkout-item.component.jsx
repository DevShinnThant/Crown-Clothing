import { useDispatch, useSelector } from "react-redux";

import {addItemToCart, clearItemFromCart, removeItemFromCart} from '../../store/cart/cart.action';
import {selectCartItems} from '../../store/cart/cart.selector';

import { Arrow, CheckoutItemContainer, Column, ImageContainer, Quantity, RemoveButton, Value } from "./checkout-item.styles";

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)

    const {name,quantity,price,imageUrl} = item;

    const addItemHandler = () => {
        dispatch(addItemToCart(cartItems,item))
    };

    const removeItemHandler = () => {
        dispatch(removeItemFromCart(cartItems,item))
    };
    
    const clearItemHandler = () => {
        dispatch(clearItemFromCart(cartItems,item))
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