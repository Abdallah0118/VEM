import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./CSS/Layout.css";

const Layout = () => {
  return (
    <div id="layout" >
      <Navbar />
      <main style={{minHeight: '100vh'}}>
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
