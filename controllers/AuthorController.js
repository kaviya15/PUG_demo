const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all authors
exports.author_list = asyncHandler(async (req, res) => {
  const authors = await Author.find().exec();
  res.render("author_list", { title: "Author List", authors });
});
