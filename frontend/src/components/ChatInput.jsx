import React, { useState } from 'react'
import Picker from "emoji-picker-react"
import smiley2 from "../assets/smiley2.svg"
import send from "../assets/send.svg"
import "../styles/chat.css";

export default function ChatInput() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState("")

    const handleEmojiPicker = () =>{
        setShowEmojiPicker(!showEmojiPicker)
    }

    const handleEmojiClick = (emoji) => {
        let message = msg + emoji.emoji;
        setMsg(message);
    };
    
  return (
    <> 
    {showEmojiPicker && <Picker className='emoji-picker-react' onEmojiClick={handleEmojiClick}/>}
        <div className="input-wrapper">
            <div className="emoji" onClick={handleEmojiPicker}>
                <img src={smiley2} alt="" width={"30px"}/>
               
            </div>
            <div className="input-tab">
                <form>
                    <input type="text" placeholder='Type your message here...' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                </form>
            </div>
            <div className="send">
            <img src={send} alt="" width={"30px"}/>
            </div>
        </div>
    </>
  )
}
