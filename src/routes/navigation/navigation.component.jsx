import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


import {signOutUser} from '../../utils/firebase/firebase.utils.js';

import {ReactComponent as CrownSvg} from '../../assets/crown.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { LogoContainer, NavigationContainer, NavLinks,NavLink } from "./navigation.styles.jsx";

import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectCartOpen } from "../../store/cart/cart.selector.js";


const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartOpen);

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