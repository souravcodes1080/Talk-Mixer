import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { setAvatarRoute } from "../utils/APIRoutes";


function SetAvatar() {
  const api = `https://api.multiavatar.com`;
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const fetchData = async () => {
    // try {
    //   const data = [];
    //   for (let i = 0; i < 4; i++) {
    //     const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
    //     const base64 = `data:image/svg+xml;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
    //     data.push(base64);
    //   }
    //   setAvatars(data);
    //   setIsLoading(false);
    // } catch (error) {
    //   console.error('Error fetching avatars:', error);
    //   setIsLoading(false);
    //   toast.error("Failed to load avatars.", toastOptions);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <img src={loader} alt="Loading..." className="loader"/>
      ) : (
        <div>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              onClick={() => setSelectedAvatar(index)}
              className={selectedAvatar === index ? "selected" : ""}
            />
          ))}
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default SetAvatar;
