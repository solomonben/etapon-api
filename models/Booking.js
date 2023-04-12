const mongoose = require("mongoose")
const Customer = require("./Customer")
const trashService = require("../services/trash.services")

var SchemaTypes = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema({
    biodegradable: {
        type: Number,
        default : 0
    },
    non_biodegradable: {
        type: Number,
        default : 0
    },
    recyclable: {
        type: Number,
        default : 0
    },
    prices : {
        biodegradable: {
            default : 0.00
        },
        non_biodegradable: {
            default : 0.00
        },
        recyclable: {
            default : 0.00
        },
    },
    collector_fee : Number,
    payment: {
        mode: String,
        amount: SchemaTypes.Decimal128
    },
    customer_id : {
        type: SchemaTypes.ObjectId,
        required : true
    },
    collector_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    address : Object,
    customer: Object,
    collector: Object,
    status: String,
    rated: {
        type:Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    comment: {
        type: String,
        default: "N/A"
    }
}, 
{
    timestamps: true
})

bookingSchema.post('save', async doc => {
    const d = new Date()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    month = months[d.getMonth()];
    customer = await Customer.findById(doc.customer_id)
    for (let i= 0; i < doc.biodegradable; i++) {
        body = {
            category: "biodegradable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            },
            month: month
        }
        trashService.saveTrash(body)
    }
    for (let i= 0; i < doc.non_biodegradable; i++) {
        body = {
            category: "non_biodegradable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            },
            month: month
        }
        trashService.saveTrash(body)
    }
    for (let i= 0; i < doc.recyclable; i++) {
        body = {
            category: "recyclable",
            address : {
                house : customer.address.house,
                purok : customer.address.purok,
                barangay : customer.address.barangay,
                city : customer.address.city
            },
            month: month
        }
        trashService.saveTrash(body)
    }
})


module.exports = mongoose.model("Booking", bookingSchema)
