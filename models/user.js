const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  permission: { type: Number, default: 0 },
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
