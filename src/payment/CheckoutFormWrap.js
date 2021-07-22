import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`);
console.log(stripePromise);
const CheckoutFormWrap = ({ children }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>{children}</Elements>
    </div>
  );
};

export default CheckoutFormWrap;
