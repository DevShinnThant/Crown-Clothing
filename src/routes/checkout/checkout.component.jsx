import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {CartContext} from '../../contexts/cart.context';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);

    return  (
        <div>
          <h2>Checkout</h2>
          <div>
          {
            cartItems.map((item)=>{
                return (
                  <CheckoutItem key={item.id} item={item}/>
                )
            })
          }
          </div>
        </div>
    )
}
export default Checkout;