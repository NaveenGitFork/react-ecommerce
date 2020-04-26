import React from "react";
import "./CartDropdown.style.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartitems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartitems.length ? (
        cartitems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartitems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
