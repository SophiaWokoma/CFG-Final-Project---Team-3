import React from "react";
import main_img from "../images/main2.png";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="home_text">
        <img src={main_img} className="home-logo" />

        <Link to="/login" className="getstartedbtn">
          {" "}
          Get Started{" "}
        </Link>
        <h1 className="main-h1">BEST APP OF THE YEAR</h1>
        <h2 className="main-h2">
          Create a space to power your productivity and induce the best you.
        </h2>
      </div>
    </div>
  );
}

export default Main;
