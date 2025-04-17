const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  book_instance: [{ type: Schema.Types.ObjectId, ref: "BookInstance" }],
});

module.exports = mongoose.model("Book", bookSchema);
