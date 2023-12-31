import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <div className="container-wrapper">
      <Header />
      <Hero />
      <br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <hr />
      <Footer />
    </div>
  );
}

export default Homepage;
