const express = require("express")
const router = express.Router()
const bookingController = require("../controllers/booking.controller")


router
	.get("/",bookingController.findAllBookings)
	.post("/", bookingController.createBooking)
	.get("/:booking_id", bookingController.findOneBooking)
	.put("/:booking_id", bookingController.updateBookingInfo)
	.delete("/:booking_id", bookingController.removeBooking)

router
	.get("/get_bookings/:customer_id", bookingController.findAllBookingsByCustomerId)
	.get("/collector_bookings/:collector_id", bookingController.findAllCollectorBookings)
	.get("/history/:customer_id", bookingController.queryBookingHistoryByCustomerId)
	
module.exports = router