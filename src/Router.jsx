import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Auth/Signup";
import Payemnt from "./pages/Payments/Payements";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import Results from './pages/Results/Results'
function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/payement" element={<Payemnt />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
