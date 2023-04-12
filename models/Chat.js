const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
    message_id : {
        type: SchemaTypes.ObjectId,
        default : null
    },
    message : String,
    sender : String
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Chat", chatSchema)