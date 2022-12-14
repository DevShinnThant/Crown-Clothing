import { useContext } from "react";

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
                    <div>
                      <h2>{item.name}</h2>
                      <span>increase</span>
                    </div>
                )
            })
          }
          </div>
        </div>
    )
}
export default Checkout;