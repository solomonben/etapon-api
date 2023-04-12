const mongoose = require("mongoose")
var SchemaTypes = mongoose.Schema.Types;

const TokenSchema = new mongoose.Schema({
    refreshToken : {
        type: String,
        required : true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Token", TokenSchema)
