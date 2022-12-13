import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import {ReactComponent as CrownSvg} from '../../assets/crown.svg';

import './navigation.styles.scss';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownSvg/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/auth">Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
};
export default Navigation;