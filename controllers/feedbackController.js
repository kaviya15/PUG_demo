const Feedback = require("../models/feedback");
const asyncHandler = require("express-async-handler");

// Display the feedback form
exports.feedback_form = asyncHandler(async (req, res) => {
  res.render("feedback_form", { title: "Feedback Form" });
});

// Handle the feedback submission
exports.feedback_create_post = asyncHandler(async (req, res) => {
  const {
    email,
    username,
    phoneNumber,
    gender,
    difficulty,
    termsAccepted,
    comments,
  } = req.body;

  const newFeedback = new Feedback({
    email,
    username,
    phoneNumber,
    gender,
    difficulty,
    termsAccepted,
    comments,
  });

  await newFeedback.save();

  res.redirect("/feedback"); // Redirect to the list of feedback after submission
});

// Display the list of all feedbacks
exports.feedback_list = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find().exec();
  res.render("feedback_list", { title: "Feedback List", feedbacks });
});
