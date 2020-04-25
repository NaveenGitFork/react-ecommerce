import React from "react";
import "./CartDropdown.style.scss";
import CustomButton from "../custombutton/CustomButton";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
