const express = require("express")
const router = express.Router()
const feedbackController = require("../controllers/feedback.controller")

router.post("/", feedbackController.saveFeedback)
	.get("/:collector_id", feedbackController.getCollectorFeedback)
	
module.exports = router