import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
import { Server } from "socket.io";
dotenv.config();

connectDB();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});

const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;

  socket.on("add-user", (userId) => {
    global.onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = global.onlineUsers.get(data.to);
    if (sendUserSocket) {
      io.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
