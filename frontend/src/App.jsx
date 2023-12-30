import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SetAvatar from "./pages/SetAvatar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/v1/560qw108/register" element={<Register />}></Route>
        <Route path="/auth/v1/671uy885/login" element={<Login />}></Route>
        <Route path="/" element={<Chat />}></Route>
        <Route path="/auth/v1/456az342/set_avatar" element={<SetAvatar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
