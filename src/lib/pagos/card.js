import React from "react";
//Pasarela de pago
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
//CSS
import "../../App.css";

//VIDEO STRIPE: https://www.youtube.com/watch?v=0Kd0LeAMGf4&t=178s

const stripePromise = loadStripe(
  "pk_test_51LehwfKG4MMPrClhOrZqik2JXPcP0tI7cpQ2mzvHoIrNHlmZrHDbViihHffX7IUSlwmcdMUOMNsV3hIpdO1tjG2X003omT4jJ5"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <br />
      <button className="btn btn-primary fluid">Registro</button>
    </form>
  );
};

export const CardPayment = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </>
  );
};
