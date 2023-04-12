const express = require("express")
const router = express.Router()
const messageController = require("../controllers/message.controller")

router.post("/", messageController.saveMessage)
router.put("/", messageController.updateMessage)
router.get("/:id", messageController.getMessages)

router.get("/collector/:collector_id", messageController.getCollectorMessages)
router.get("/customer/:customer_id", messageController.getCustomerMessages)


module.exports = router