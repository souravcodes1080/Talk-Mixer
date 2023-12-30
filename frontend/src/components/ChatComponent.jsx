import React, { useState } from 'react'
import "../styles/chat.css"
import cross2 from "../assets/cross2.svg"
import ChatInput from './ChatInput'
import Message from './Message'
function ChatComponent({currentChat, close}) {
    const handleChatMsg = async(msg) => {
        
    }
   
  return (
    <>
    <div className="chat-component-wrapper">

        <div className="chat-header">
            <div className="chat-user-details">
                <img src={`${currentChat.avatar}.png`} alt="curent-chat-user-avatar" width={"50px"}/>
                <p>{currentChat.username}</p>   
            </div>
                <div onClick={close} className='cross-btn '>
                    <img src={cross2} alt="crossBtn" width={"20px"} />
                </div>
        </div>


        <div className="chat-body">
            <Message />
        </div>



        <div className="chat-input">
            <ChatInput handleChatMsg={handleChatMsg}/>
        </div>
    </div>
        
    </>
  )
}

export default ChatComponent