// models/feedback.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  difficulty: { type: Number, min: 1, max: 10, required: true },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
