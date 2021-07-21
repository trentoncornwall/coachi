const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  conversationId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
