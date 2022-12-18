import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";

import {signOutUser} from '../../utils/firebase/firebase.utils.js';

import { UserContext } from "../../contexts/user.context";

import {ReactComponent as CrownSvg} from '../../assets/crown.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import { LogoContainer, NavigationContainer, NavLinks,NavLink } from "./navigation.styles.jsx";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownSvg/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {
          currentUser ? (<NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>) : (<NavLink to="/auth">Sign In</NavLink>)
          }
          <CartIcon/>
        </NavLinks>
        {
          isCartOpen && <CartDropdown/>
        }
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
};
export default Navigation;