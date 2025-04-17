const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authorController = require("../controllers/AuthorController");

// Book Routes
router.get("/books", bookController.book_list);
router.get("/book/create", bookController.book_create_get);
router.post("/book/create", bookController.book_create_post);
router.get("/book/:id", bookController.book_detail);

// Author Routes
router.get("/authors", authorController.author_list);

module.exports = router;
