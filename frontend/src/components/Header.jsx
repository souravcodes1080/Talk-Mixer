import React from "react";
import logo from "../assets/logo.png";
import "../styles/header.css"
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="">
        <div className="header-tab container">
          <div className="left">
            <img src={logo} alt="brand_logo_main" width={"120px"} />
          </div>
          <div className="right">
          <div className="about-us">
            <Link className="tab-link" to= "/" >About Us</Link>
          </div>
          <div className="services">
            <Link className="tab-link" to= "/" >Services</Link>
          </div>
          <div className="contact-us">
            <Link className="tab-link" to= "/" >Contact Us</Link>
          </div>
            <Link to="/auth/v1/560qw108/register">
              <button className="get-started">Get Started</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
