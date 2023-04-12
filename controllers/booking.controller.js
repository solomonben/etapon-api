const bookingService = require("../services/booking.services")
const httpStatus = require('http-status');

const findAllBookings = async (req, res) => {
    const bookings = await bookingService.queryAllBookings()
    res.send(bookings)
}

const findAllCollectorBookings = async (req, res) => {
    const bookings = await bookingService.queryCollectorBookings(req.params.collector_id)
    res.send(bookings)
}
const findAllBookingsByCustomerId = async (req, res) => {
    const bookings = await bookingService.queryAllBookingByCustomerId(req.params.customer_id)
    res.send(bookings)
}

const findOneBooking = async (req, res) => {
    const booking = await bookingService.queryOneBooking(req.params.booking_id)
    res.send(booking)
}
const createBooking = async (req, res) => {
    const booking = await bookingService.saveBooking(req.body)
    res.status(httpStatus.CREATED).send(booking)
}

const updateBookingInfo = async (req, res) => {
    const booking = await bookingService.updateBooking(req.params.booking_id, req.body)
    res.status(booking).send()
}

const removeBooking = async (req, res) => {
    const booking = await bookingService.deleteBooking(req.params.booking_id)
    res.send(booking)
}

const queryBookingHistoryByCustomerId = async (req, res) =>{
    const bookings = await bookingService.queryBookingHistoryByCustomerId(req.params.customer_id)
    res.send(bookings)
}

module.exports = {
    findAllBookings,
    findAllBookingsByCustomerId,
    findOneBooking,
    createBooking,
    updateBookingInfo,
    removeBooking,
    findAllCollectorBookings,
    queryBookingHistoryByCustomerId
    
}