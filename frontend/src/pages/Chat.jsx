import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/chat.css";
import axios from "axios";
import { allUsers } from "../utils/ApiRoutes";
import Contacts from "../components/Contacts";
function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("chat-app-user")));
  const [currentChat, setCurrentChat] = useState(undefined);

  const loadContacts = async () => {
    try {
      if (currentUser) {
        const response = await axios.get(`${allUsers}/${currentUser._id}`);
        setContacts(response.data);
        console.log("all- ",response.data)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  
  console.log("curr",currentUser)
  
  const handleChatChange = (chat) =>{
    setCurrentChat(chat)
  }

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
          navigate("/auth/v1/671uy885/login");
        }
      loadContacts()  
    
  }, []);

  return (
    <>
      <div className="chat-wrapper">
        <div className="chat-container">
        <div className="chat-user-list">
          <Contacts contacts={contacts} currentUser={currentUser} changeChat = {handleChatChange} />
        </div>
        <div className="chat-box">

        </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
