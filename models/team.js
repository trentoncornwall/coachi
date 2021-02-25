import mongoose from "mongoose";
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: { type: String, required: true },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
