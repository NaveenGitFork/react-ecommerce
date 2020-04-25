import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-continer" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

/* 
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden,
});
*/
export default connect(mapStateToProps)(Header);
