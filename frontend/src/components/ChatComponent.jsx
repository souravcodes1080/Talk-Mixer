import React, { useEffect, useState } from "react";
import "../styles/chat.css";
import cross2 from "../assets/cross2.svg";
import ChatInput from "./ChatInput";
import Message from "./Message";
import axios from "axios";
import { sendMessageRoute } from "../utils/ApiRoutes";
import { getMessageRoute } from "../utils/ApiRoutes";
function ChatComponent({ currentChat, close, currentUser }) {
  const [messages, setMessages] = useState([]);
  //   const handleCurrentChat = async () => {
  //     const response = await axios.post(getMessageRoute, {
  //       from: currentUser._id,
  //       to: currentChat._id,
  //     });
  //     console.log(response.data);
  //     setMessages(response.data);
  //   };
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post(getMessageRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    console.log("print", messages);
    if (currentChat) {
      fetchMessages();
      // const interval = setInterval(fetchMessages, 200);

      // return () => clearInterval(interval);
    }
  }, [currentChat, currentUser._id, getMessageRoute]);

  const handleChatMsg = async (msg) => {
    const response = await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
      updatedAt,
    });
  };

  return (
    <>
      <div className="chat-component-wrapper">
        <div className="chat-header">
          <div className="chat-user-details">
            <img
              src={`${currentChat.avatar}.png`}
              alt="curent-chat-user-avatar"
              width={"50px"}
            />
            <p>{currentChat.username}</p>
          </div>
          <div onClick={close} className="cross-btn ">
            <img src={cross2} alt="crossBtn" width={"20px"} />
          </div>
        </div>

        <div className="chat-body">
          {/* <Message /> */}
          <div className="chat-messages">
            {messages.map((msg) => {
              return (
                <div
                  className={`message ${msg.fromSelf ? "sended" : "recieved"}`}
                >
                <div className="content">
                    <p>{msg.message}</p>
                  <span>{msg.updatedAt}</span>{" "}
                </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        <div className="chat-input">
          <ChatInput handleChatMsg={handleChatMsg} />
        </div>
      </div>
    </>
  );
}

export default ChatComponent;
