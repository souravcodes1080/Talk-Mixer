import mongoose from "mongoose"
const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    users: [],
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);
