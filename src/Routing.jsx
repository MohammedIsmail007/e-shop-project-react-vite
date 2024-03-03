import React from "react";
import ContactUs from "./ContactUs";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import About from "./About";
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Products" element={<ProductPage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
