import mongoose from "mongoose";
const { Schema } = mongoose;

const planSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref= "user",
      required: true
  },
  archived: {type: Boolean, default: false},
  subject: String,
  focuseArea: String,
  rootCause: String
});

const Team = mongoose.model("Plan", planSchema);
module.exports = Team;
