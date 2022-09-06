import React from "react";
import Routes from "./lib/application/routes";
// Redux
import { Provider } from "react-redux";
import store from "./store";
//Pasarela de pago
import {loadStripe} from '@stripe/stripe-js'
import { Elements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51LehwfKG4MMPrClhOrZqik2JXPcP0tI7cpQ2mzvHoIrNHlmZrHDbViihHffX7IUSlwmcdMUOMNsV3hIpdO1tjG2X003omT4jJ5")
const CheckoutForm = () => {
  return <form>
    <CardElement/>
  </form>
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
