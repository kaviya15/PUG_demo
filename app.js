const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const compression = require("compression");
const helmet = require("helmet");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const feedbackRouter = require("./routes/feedback");
const catalogRouter = require("./routes/catalog");

dotenv.config();

const app = express();

// Set up mongoose connection
const mongoDB =
  process.env.MONGODB_URI || "mongodb://localhost/book_management";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);
app.use("/catalog", catalogRouter);
app.use("/feedback", feedbackRouter); // Add the feedback routes

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(3002, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
