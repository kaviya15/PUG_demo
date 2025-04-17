const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Route to get the feedback form
router.get("/create", feedbackController.feedback_form);

// Route to post the feedback
router.post("/create", feedbackController.feedback_create_post);

// Route to display the feedback list
router.get("/", feedbackController.feedback_list);

module.exports = router;
