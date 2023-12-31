import {addMessage, getAllMessage} from "../controllers/message.controller.js"
import {Router} from "express"
const messageRouter = Router()

messageRouter.post("/add", addMessage)
messageRouter.post("/getAll", getAllMessage)

export default messageRouter