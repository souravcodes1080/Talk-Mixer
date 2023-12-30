import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    phonenumber:{
        type:Number,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    avatar:{
        type: String,
        default: ""
    }
}, {timestamps: true})


export const User = mongoose.model("User", userSchema)