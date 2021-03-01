const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  permission: { type: Number, default: 0 },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
