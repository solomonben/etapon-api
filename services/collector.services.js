// Import models
const Collector = require("../models/Collector")
const Token = require("../models/Token")

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Find all
async function queryAllCollector() {
    const collectors = await Collector.find({'is_deleted' : false})
    return collectors
}
// Find one
async function queryOneCollector(customer_id){
    const collector = await Collector.findById(customer_id)
	return collector
}

// Create
async function saveCollector(body) {
    const email_exist = await Collector.findOne({"email" : body.email }).exec()
    if(email_exist == null){
        const collector = await Collector.create(body)
        return collectorLogin(body.email, body.password)
    }else{
        return {"message" : "email already exist"}
    }
}

// Update
async function updateCollector(collector_id, body) {
    const collector = await Collector.findByIdAndUpdate(collector_id, {"$set" : body})
	return collector
}
// Delete
async function deleteCollector(collector_id){
    const collector = await Collector.findByIdAndUpdate(collector_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "collector deleted", "collector_name" : collector.name }
}
//module.exports.saveCustomer = saveCustomer
// Customer Login
async function collectorLogin(email, password){
    const collector = await Collector.findOne({"email" : email }).exec()
    if(collector == null){
        return { "status" : 401 } // Email not found
    }
    
    try {
        if (await bcrypt.compare(password, collector.password)){
            user = { "email" : email }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { 'expiresIn' : '15d'})
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)
            Token.create({"refreshToken" : refreshToken})
            return {"status" : 200 , "accessToken" : accessToken, "refreshToken": refreshToken, "user" : collector._id, "user_type" : collector.user_type} // Success
        } else {
            return {"status" : 401 } // Wrong password
        }
    } catch (error) {
        throw(error)
        return { "status" : 500 } // Server error
    }

}

async function collectorLogout(token){
    await Token.deleteOne({"refreshToken" : token})
    return {"status" : 204}
}
module.exports = {
    collectorLogin,
    collectorLogout,
    saveCollector,
    queryAllCollector,
    queryOneCollector,
    updateCollector,
    deleteCollector
}
