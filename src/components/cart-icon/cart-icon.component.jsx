import { useDispatch, useSelector } from 'react-redux';
import { toggleCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectCartOpen } from '../../store/cart/cart.selector';

import { CartIconContainer, ItemCount, ShoppIcon } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectCartOpen);

    const toggleCart = () => {
      dispatch(toggleCartOpen(!isCartOpen));   
    }

    return (
        <CartIconContainer onClick={toggleCart}>
        <ShoppIcon />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;