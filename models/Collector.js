const mongoose = require("mongoose")
const hasher = require("../utils/hasher")
const collectorSchema = new mongoose.Schema({
    fullname : {
            type : String,
            required : true
        },
    phone_number : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    user_type : {
        type : String,
        default : "collector"
    },
    password :{
        type : String,
        required : true
    },
    is_deleted : {
        type: Boolean,
        default: false
    },
    verified : {
        type: Boolean,
        default: false
    }
})

collectorSchema.pre('save', async function(next) {
    this._doc.password = await hasher.hashPassword(this._doc.password);
    next();
  });

module.exports = mongoose.model("Collector", collectorSchema)
