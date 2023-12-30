import React, { useState } from "react";
import Picker from "emoji-picker-react";
import smiley2 from "../assets/smiley2.svg";
import send from "../assets/send.svg";
import "../styles/chat.css";

export default function ChatInput({ handleChatMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject, event) => {
    const emoji = emojiObject.emoji;
    const newMessage = msg + emoji;
    setMsg((prevMsg) => prevMsg + emoji);
  };

  const sendChat = (e) => {
    console.log(e);
    e.preventDefault();
    if (msg.length > 0) {
      handleChatMsg(msg);
      setMsg("");
      console.log(msg)
    }
  };
  return (
    <>
      {showEmojiPicker && (
        <Picker
          className="emoji-picker-react"
          onEmojiClick={handleEmojiClick}
        />
      )}
      <div className="input-wrapper">
        <div className="emoji" onClick={handleEmojiPicker}>
          <img src={smiley2} alt="" width={"30px"} />
        </div>

        <form onSubmit={(e) => sendChat(e)} className="input-form">
          
            <input
              type="text"
              placeholder="Type your message here..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          
          <button className="send" type="submit">
            <img src={send} alt="" width={"30px"} />
          </button>
        </form>
      </div>
    </>
  );
}
