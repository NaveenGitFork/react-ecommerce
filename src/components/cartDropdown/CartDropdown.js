import React from "react";
import "./CartDropdown.style.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartitems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartitems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartitems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
