import {Router} from "express"
import { register ,login, getAllUsers } from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/allUsers/:id", getAllUsers)

export default userRouter