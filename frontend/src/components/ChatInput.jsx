import React from 'react'
import Picker from "emoji-picker-react"
import smiley2 from "../assets/smiley2.svg"
import send from "../assets/send.svg"
import "../styles/chat.css";

export default function ChatInput() {
  return (
    <>
        <div className="input-wrapper">
            <div className="emoji">
                <img src={smiley2} alt="" width={"30px"}/>
            </div>
            <div className="input-tab">
                <form>
                    <input type="text" placeholder='Type your message here...'/>
                </form>
            </div>
            <div className="send">
            <img src={send} alt="" width={"30px"}/>
            </div>
        </div>
    </>
  )
}
