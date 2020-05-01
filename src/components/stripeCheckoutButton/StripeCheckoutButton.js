import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishaleKey = "pk_test_3AyYP01feW0pPJHrKzlEmgwJ00qcWyC5VG";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Nav Ltd."
      billingAddress
      shippingAddress
      description={`Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishaleKey}
    />
  );
};

export default StripeCheckoutButton;
