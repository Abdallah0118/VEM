import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./CSS/Layout.css";
import ShoppingCart from "./ShoppingCart";

const Layout = () => {
  return (
    <div id="layout">
      <Navbar />
      <ShoppingCart />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
