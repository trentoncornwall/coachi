const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  permission: { type: Number, default: 0 },
  UID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: false },
  website: { type: String, required: false },
  description: { type: String, required: false },
  features: [],
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
