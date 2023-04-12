const express = require("express")
const router = express.Router()
const notificationController = require("../controllers/notification.controller")

router.post("/", notificationController.saveNotif)

router.get("/collector/:collector_id", notificationController.getCollectorNotifs)
router.get("/customer/:customer_id", notificationController.getCustomerNotifs)

module.exports = router