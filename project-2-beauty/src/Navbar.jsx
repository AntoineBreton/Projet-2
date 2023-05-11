import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            Find all your favorite beauty products on our website...
            <img
              className="cart"
              src="../public/assets/img/panier (1).png"
            ></img>
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
