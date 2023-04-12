const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;
const customerService = require("../services/customer.services")
const collectorService = require("../services/collector.services")
const Chats = require('./Chat')

const messageSchema = new mongoose.Schema({
    customer_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    collector_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    collector_name: String,
    customer_name: String,
    last_message: Object
}, 
{
    timestamps: true
})


messageSchema.pre('save', async function(next) {
    const collector = await collectorService.queryOneCollector(this._doc.collector_id)
    const customer = await customerService.queryOneCustomer(this._doc.customer_id)
    this._doc.collector_name = collector.fullname
    this._doc.customer_name = customer.fullname
    next();
});

messageSchema.pre('findOneAndUpdate', async function(next){
    const docToUpdate = await this.model.findOne(this.getQuery())
    const data = this.getUpdate()["$set"]
    const body = {
        message_id : docToUpdate["_id"],
        message : data['last_message']['message'],
        sender : data["last_message"]["sender"]
    }
    Chats.create(body)
    next()
})

module.exports = mongoose.model("Message", messageSchema)