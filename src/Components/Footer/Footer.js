import React from "react";
import "./Footer.css";
import flogo from "../images/footerlogo.png";

function Footer() {
  return (
    <div className="homefooter">
      <div className="upper_footer">
        <div className="box_1">
          <i className="fa-solid fa-circle"></i>
          {/* <img src={flogo} className="footer-logo" /> */}
          Lapstop
        </div>
        <div className="box_2">
          <h6>Apps</h6>
          <p>Download the App! </p>
        </div>
        <div className="box_3">
          <h6>Contact Us</h6>
          <p>Contact us through email!</p>
        </div>
        <div className="box_4">
          <h6>Jobs</h6>
          <p>Join the community!</p>
        </div>
      </div>
      <div className="solid_line2"></div>
      <div className="lower_footer">
        <div className="language">
          <h6>English</h6>
        </div>
        <div className="terms">
          <h6>Terms & Privacy</h6>
        </div>
        <div className="lapstop">
          <h6>@2022 Lapstop Inc.</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
