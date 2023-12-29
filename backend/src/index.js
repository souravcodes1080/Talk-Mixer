import dotenv from "dotenv"
import app from "./app.js"
import connectDB from "./db/index.js"
dotenv.config()


connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on Port: ${process.env.PORT}`)
})