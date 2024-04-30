import React from "react";
import convrsation from "../assets/conversation.gif";
import "../styles/chat.css";
function Welcome({ currentUser }) {
  return (
    <>
      <div className="body-wrapper">
        <img src={convrsation} alt="" className="hero" width={"40%"} />
        <h1>Welcome, {currentUser.username}</h1>
        <h2 >Select chat to start a talk!</h2>
      </div>
    </>
  );
}

export default Welcome;
