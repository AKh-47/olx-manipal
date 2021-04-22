import mongoose, { Schema } from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  chatRoom: {
    type: Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<any>("ChatMessage", chatMessageSchema);
