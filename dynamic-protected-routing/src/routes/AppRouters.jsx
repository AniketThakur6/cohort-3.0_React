import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

      <Route
        path="/details/:id"
        element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouters;
