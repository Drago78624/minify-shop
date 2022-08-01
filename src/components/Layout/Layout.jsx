import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
