const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  date_of_death: { type: Date },
});

module.exports = mongoose.model("Author", authorSchema);
