import { Message } from "../models/message.model.js";

const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    if (!from || !to || !message) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const data = await Message.create({
      text: message,
      users: [from, to],
      sender: from,
    });

    if (data) {
      return res.status(201).json({ message: "Message added successfully." });
    } else {
      return res.status(400).json({ message: "Failed to add message to db." });
    }
  } catch (error) {
    next(error);
  }
};

const getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    if (!from || !to) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    

    const options = {
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const projectMsg = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.text,
        updatedAt: new Date(msg.updatedAt).toLocaleString('en-US', options)
      };
    });

    return res.json(projectMsg);
  } catch (error) {
    next(error);
  }
};

export { addMessage, getAllMessage };
