const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;
const customerService = require("../services/customer.services")
const feedbackSchema = new mongoose.Schema({
    customer : Object,
    customer_id :{
        type: SchemaTypes.ObjectId,
        default : null
    },
    collector_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    message: String,
    rating: Number
}, 
{
    timestamps: true
})

feedbackSchema.pre('save', async function(next) {
    const customer = await customerService.queryOneCustomer(this._doc.customer_id)
    this._doc.customer = {
        fullname: customer.fullname,
        address: customer.address.house + ", " + customer.address.purok + ", " + customer.address.barangay 
    }
    next();
});

module.exports = mongoose.model("Feedback", feedbackSchema)