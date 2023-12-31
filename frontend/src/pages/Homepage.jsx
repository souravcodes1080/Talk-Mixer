import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
function Homepage() {
  return (
    <div className="container-wrapper">
      <Header />
      <Hero />
    </div>
  );
}

export default Homepage;
