import React from "react";
import "/public/styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-box">
      <div className="img-box">
        <img src="public\images\brand_logo.svg" alt="" />
      </div>
      <div className="menubar">
        <a href="">MENU</a>
        <a href="">LOCATION</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </div>
      <button>Login</button>
    </div>
  );
}

export default Navbar;
