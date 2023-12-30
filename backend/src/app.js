import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())


//routing
import userRouter from "./routes/user.route.js"
app.use("/api/auth/v1", userRouter)

export default app