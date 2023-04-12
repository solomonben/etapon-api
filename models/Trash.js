const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;

const trashSchema = new mongoose.Schema({
    category: String,
    address : {
        house : {
            type : String,
            required : true
        },
        purok : {
            type : String,
            required : true
        },
        barangay : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        }
    },
    month : String,
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Trash", trashSchema)
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