import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SetAvatar from "./pages/SetAvatar";
import Chat from "./pages/Chat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/v1/560qw108/register" element={<Register />}></Route>
        <Route path="/auth/v1/671uy885/login" element={<Login />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/" element={<Chat />}></Route>
        {/* <Route path="/auth/v1/456az342/set_avatar" element={<SetAvatar />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
