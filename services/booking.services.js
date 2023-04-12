// Import models
const Booking = require("../models/Booking")

// Find all
async function queryAllBookings() {
    const bookings = await Booking.find({'status' : 'pending','is_deleted' : false}).sort({'createdAt' : -1}).limit(10).exec()
    let booking_list = []
    bookings.forEach(booking => {
        booking_list.push(booking)
    })
    return booking_list
}

// Find all
async function queryCollectorBookings(collector_id) {
    const bookings = await Booking.find({
        'status' : {"$in" : ["pending" , "picked-up", "booked"]},
        'is_deleted' : false,
        'collector_id' : collector_id
    }).sort({'createdAt' : -1}).exec()
    let booking_list = []
    bookings.forEach(booking => {
        booking_list.push(booking)
    })
    return booking_list
}
// Find one
async function queryOneBooking(booking_id){
    const booking = await Booking.findById(booking_id)
	return booking
}

// Find all with customer ID
async function queryAllBookingByCustomerId(customer_id){
    console.log(customer_id)
    const bookings = await Booking.find({"customer_id" : customer_id, "status" :{"$in" : ["pending" , "picked-up", "booked", "success"]}}).sort({'createdAt' : -1}).exec()
    let booking_list = []
    bookings.forEach(booking => {
        booking_list.push(booking)
    })
	return booking_list
}

async function queryBookingHistoryByCustomerId(customer_id){
    const bookings = await Booking.find({"customer_id" : customer_id, "status" : "done" }).sort({'createdAt' : -1}).exec()
    let booking_list = []
    bookings.forEach(booking => {
        booking_list.push(booking)
    })
	return booking_list
}

// Create
async function saveBooking(body) {
    console.log(body)
    const booking = await Booking.create(body)
    console.log(booking)
    return booking
   
}

// Update
async function updateBooking(booking_id, body) {
    if (body.status == "booked"){
        const check_booking = await Booking.findOne({"_id" : booking_id, "status" : "pending"}).exec()
        if(check_booking){
            await Booking.findByIdAndUpdate(booking_id, {"$set" : body})
            return 200
        } else {
            return 400
        }
        
    }
    await Booking.findByIdAndUpdate(booking_id, {"$set" : body})
	return 200
}

// Delete
async function deleteBooking(booking_id){
    await Booking.findByIdAndUpdate(booking_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "customer deleted"}
}
//module.exports.saveCustomer = saveCustomer
module.exports = {
    saveBooking,
    queryAllBookings,
    queryOneBooking,
    queryCollectorBookings,
    queryAllBookingByCustomerId,
    queryBookingHistoryByCustomerId,
    updateBooking,
    deleteBooking
}
