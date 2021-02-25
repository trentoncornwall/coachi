import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  admin: { type: Boolean, default: false },
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  team: String,
  plans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plan",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
