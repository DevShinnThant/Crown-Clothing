import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    const navigate = useNavigate();
    
    const goToCheckoutHandler = () => {
      navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
           <CartItems>
              {
                cartItems.length ? cartItems.map((cartItem)=> 
                (<CartItem key={cartItem.id} cartItem={cartItem}/>)
               ) : <EmptyMessage>no items exist</EmptyMessage>
              }
           </CartItems>
           <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;