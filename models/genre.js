// models/genre.js
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
});

// Compile model from schema
module.exports = mongoose.model("Genre", genreSchema);
