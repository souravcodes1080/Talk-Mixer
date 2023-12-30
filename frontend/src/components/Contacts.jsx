import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
function Contacts({ contacts, currentUser, changeChat }) {
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

          <div className="current-user ">
            <div className="avatar">
              <img src={`${currentUserAvatar}.png`} alt="" width={"50px"} />
            </div>
            <div className="username">
              <p>{currentUsername}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contacts;
