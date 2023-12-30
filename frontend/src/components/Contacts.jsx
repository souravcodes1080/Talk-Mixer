import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logout from "../assets/logout.svg";
import "../styles/chat.css"
import { useNavigate } from "react-router-dom";
function Contacts({ contacts, currentUser, changeChat }) {
  const navigate = useNavigate()
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");
  const [currentUserPhonenumber, setCurrentUserPhonenumber] = useState("");

  const [currentSelected, setcurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUsername(currentUser.username);
      setCurrentUserAvatar(currentUser.avatar);
      setCurrentUserPhonenumber(currentUser.phonenumber);
      console.log(currentUserAvatar);
    }
  }, [currentUser]);

  const logoff = () =>{
    localStorage.clear()
    navigate("/")
  }
  const changeCurrentChat = (index, contact) => {
    setcurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserAvatar && currentUsername && (
        <div className="user-list-container">
          <div className="brand">
            <img src={logo} alt="" width={"35%"} />
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                  key={index}
                >
                  <div className="avatar">
                    <img src={`${contact.avatar}.png`} alt="" width={"40px"} />
                  </div>
                  <div className="username">
                    <p>{contact.username}</p>
                  </div>
                </div>
              );
            })}
              
          </div>
            <div className="current-user-wrapper">
              <div className="current-user ">
            <div className="avatar">
              <img src={`${currentUserAvatar}.png`} alt="" width={"50px"} />
            </div>
            <div className="username">
              <p>{currentUsername}</p>
            </div>
          </div>
          <div  className='cross-btn ' onClick={logoff}>
                    <img src={logout} alt="crossBtn" width={"20px"} />
                </div>
            </div>
          
          
        </div>
      )}
    </>
  );
}

export default Contacts;
