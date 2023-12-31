import React from "react";
import "../styles/hero.css";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="left">
          <div className="hero-content">
            <h1>
              Welcome to Hike,
              <br /> <span>Chat App</span>
            </h1>

            <p>
            Connect and converse effortlessly with the World. Share ideas, stay in touch, and foster relationships through seamless messaging. Register and experience smooth communication like never before!
              <br />
              <br />
              <Link to="/auth/v1/560qw108/register">
                <button className="get-started hero-btn">Get Started</button>
              </Link>
            </p>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="hero_image_mobile" width={"80%"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
