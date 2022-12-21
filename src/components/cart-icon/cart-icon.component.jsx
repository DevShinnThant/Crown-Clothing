import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount, ShoppIcon } from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen,toggleCartOpen,cartCount} = useContext(CartContext);

    const toggleCart = () => {
        toggleCart();
    }

    return (
        <CartIconContainer onClick={toggleCartOpen}>
        <ShoppIcon />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;