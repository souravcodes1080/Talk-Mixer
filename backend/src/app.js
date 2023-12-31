import express from "express"
import cors from "cors"
// import {Socket} from "socket.io"
const app = express()

app.use(cors())
app.use(express.json())


//routing
import userRouter from "./routes/user.route.js"
app.use("/api/auth/v1", userRouter)

import messageRouter from "./routes/message.route.js"
app.use("/api/auth/v1/message", messageRouter)

export default app 