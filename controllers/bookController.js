const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const asyncHandler = require("express-async-handler");

// Display list of all books
exports.book_list = asyncHandler(async (req, res) => {
  const books = await Book.find().populate("author").populate("genre").exec();
  console.log("bools", books);
  res.render("book_list", { title: "Book List", books });
});

// Display create book form
// In your controller
exports.book_create_get = async (req, res, next) => {
  try {
    const authors = await Author.find().exec(); // Fetch all authors
    const genres = await Genre.find().exec(); // Fetch all genres

    // If genres are empty or undefined, provide an empty array as a fallback
    if (!genres) genres = [];

    res.render("book_form", { authors, genres });
  } catch (err) {
    next(err);
  }
};

// Handle book creation
exports.book_create_post = asyncHandler(async (req, res) => {
  const { title, author, summary, genre } = req.body;
  const book = new Book({ title, author, summary, genre });
  await book.save();
  res.redirect(`/catalog/book/${book.id}`);
});

// Display a specific book
exports.book_detail = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("author")
    .populate("genre")
    .exec();
  res.render("book_detail", { title: book.title, book });
});
