import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/ProductDetail/Products";
import Auth from "./pages/Auth/Auth";
import Payemnt from "./pages/Payments/Payements";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import Results from "./pages/Results/Results";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PwpMuK2PpLTPswq4gn1KIJExnrS87scICELxWxxyJ08e50Hg6RXKTlObfvCkh9YUJwCzvD261v2AgdEMRdax7Z400GXX3DPqa"
);

function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payement"
            element={
              <Elements stripe={stripePromise}>
                <Payemnt />
              </Elements>
            }
          />
          <Route path="/order" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
