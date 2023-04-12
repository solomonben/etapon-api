const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types

const logsSchema = new mongoose.Schema({
    performed_by: SchemaTypes.ObjectId,
    operation_type: String,
    created_object: Object,
    updated_object: Object,
    before_object: Object
},
{
    timestamps: true
})


module.exports = mongoose.model("Logs", logsSchema)
/*

*/