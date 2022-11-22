import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-header">
      <header className="homeheader">
        <img src={logo} className="homelogo" />
        <button className="Features">Features</button>
        <button className="Insights">Insights</button>
        <button className="Resources">Resources</button>
        <button className="homelogin">Log In</button>
      </header>
    </div>
  );
}

export default Navbar;
