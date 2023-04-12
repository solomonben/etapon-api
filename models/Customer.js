const mongoose = require("mongoose")

const hasher = require("../utils/hasher")
var SchemaTypes =  mongoose.Schema.Types

const customerSchema = new mongoose.Schema({
    fullname : {
            type : String,
            required : true
        },
    phone_number : {
        type : String,
        required : true
    },
    created_by: SchemaTypes.ObjectId,
    updated_by: SchemaTypes.ObjectId,
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    password :{
        type : String,
        required : true
    },
    user_type : {
        type : String,
        default : "customer"
    }
    ,
    address : {
        house : {
            type : String,
            default : ""
        },
        purok : {
            type : String,
            default : ""
        },
        barangay : {
            type : String,
            default : ""
        },
        city : {
            type : String,
            default: "Iligan"
        }
    },
    is_deleted : {
        type: Boolean,
        default: false
    }
})

customerSchema.pre('save', async function(next) {
    this._doc.password = await hasher.hashPassword(this._doc.password);
    next();
  });


module.exports = mongoose.model("Customer", customerSchema)
