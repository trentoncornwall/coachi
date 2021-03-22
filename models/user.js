const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  permission: { type: Number, default: 0 },
  first: { type: String, required: true },
  last: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  github: { type: String, required: false },
  linkedin: { type: String, required: false },
  website: { type: String, required: false },
  description: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
