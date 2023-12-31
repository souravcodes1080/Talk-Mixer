import React, { useEffect, useRef, useState } from "react";
import "../styles/chat.css";
import cross2 from "../assets/cross2.svg";
import ChatInput from "./ChatInput";
import {v4 as uuidv4} from "uuid"
import axios from "axios";
import { sendMessageRoute } from "../utils/ApiRoutes";
import { getMessageRoute } from "../utils/ApiRoutes";
function ChatComponent({ currentChat, close, currentUser, socket     }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const scrollRef = useRef()
  //   const handleCurrentChat = async () => {
  //     const response = await axios.post(getMessageRoute, {
  //       from: currentUser._id,
  //       to: currentChat._id,
  //     });
  //     console.log(response.data);
  //     setMessages(response.data);
  //   };// const interval = setInterval(fetchMessages, 200);

      // return () => clearInterval(interval);
  useEffect(() => {
    if(currentChat){
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
      
    }
    }
    
  }, [currentChat, currentUser._id, getMessageRoute,]);

 

  const handleChatMsg = async (msg) => {
    const updatedAt = new Date(); 
    const response = await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
      updatedAt: updatedAt, 
    });
    socket.current.emit("send-msg",{
      to:currentChat._id,
      from:currentUser._id,
      message:msg,
      updatedAt: updatedAt
    })  

    const msgs = [...messages]
    msgs.push({fromSelf: true,message:msg})
    setMessages(msgs)
  };


  useEffect(()=>{
    if(socket.current){
      socket.current.on("msg-recieve", (msg)=>{
        setArrivalMessages({fromSelf:false,message:msg})
      })
    }
  }, [])

  useEffect(()=>{
      arrivalMessages && setMessages((prev)=>[...prev, arrivalMessages])
  }, [arrivalMessages])

  useEffect(()=>{
    scrollRef.current?.scrollIntoView()
}, [messages])

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
                  ref={scrollRef}
                  className={`message ${msg.fromSelf ? "sended" : "recieved"}`}
                  key={uuidv4()}
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
