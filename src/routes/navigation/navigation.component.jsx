import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import {signOutUser} from '../../utils/firebase/firebase.utils.js';

import { UserContext } from "../../contexts/user.context";

import {ReactComponent as CrownSvg} from '../../assets/crown.svg';

import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
         {
          currentUser ? (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>) : (<Link className="nav-link" to="/auth">Sign In</Link>)
         }
         <CartIcon/>
        </div>
        {
          isCartOpen && <CartDropdown/>
        }
      </div>
      <Outlet/>
    </Fragment>
  )
};
export default Navigation;