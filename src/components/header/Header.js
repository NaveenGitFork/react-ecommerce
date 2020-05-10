import React from "react";
import {
  HeaderContainerSC,
  LogoConatinerSC,
  OptionsContainerSC,
  OptionLinkSC,
  OptionDivSC,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainerSC>
    <LogoConatinerSC to="/">
      <Logo className="logo" />
    </LogoConatinerSC>
    <OptionsContainerSC>
      <OptionLinkSC to="/shop">SHOP</OptionLinkSC>
      <OptionLinkSC to="/shop">CONTACT</OptionLinkSC>
      {currentUser ? (
        <OptionDivSC onClick={() => auth.signOut()}>SIGN OUT</OptionDivSC>
      ) : (
        <OptionLinkSC to="/signIn">SIGN IN</OptionLinkSC>
      )}
      <CartIcon />
    </OptionsContainerSC>
    {hidden ? null : <CartDropdown />}
  </HeaderContainerSC>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/* 
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden,
});
*/
export default connect(mapStateToProps)(Header);
