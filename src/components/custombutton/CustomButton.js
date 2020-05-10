import React from "react";
import { CustomButtonControllerSC } from "./CustomButton.styled";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonControllerSC {...props}>{children}</CustomButtonControllerSC>
);

/*
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
*/
export default CustomButton;
