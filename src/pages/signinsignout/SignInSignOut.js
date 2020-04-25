import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signup/SignUp";
import "./SignInSignOut.Style.scss";

const SignInSignOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignOut;
