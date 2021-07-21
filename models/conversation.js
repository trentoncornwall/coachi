const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
