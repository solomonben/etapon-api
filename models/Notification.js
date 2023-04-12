const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;

const notifSchema = new mongoose.Schema({
    customer_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    collector_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    booking_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    status: String,
    message: String,
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Notification", notifSchema)
/*
bookings
	- trashes [
		{
			category_name: "bio/non-bio/recyc",
			no_of_bags: ""
		}
		]- req
	- time - req
	- payment 
		- mode - req 
		- amount - req 
*/