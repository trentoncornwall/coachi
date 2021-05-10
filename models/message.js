const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  UID_from: { type: Schema.Types.ObjectId, ref: "User", required: true },
  UID_to: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: false },
  archived: { type: Boolean, default: false },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
