// Import models
const Customer = require("../models/Customer")
const Token = require('../models/Token')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Find all
async function queryAllCustomer() {
    const customers = await Customer.find({'is_deleted' : false})
    return customers
}
// Find one
async function queryOneCustomer(customer_id){
    const customer = await Customer.findById(customer_id)
	return customer
}

// Create
async function saveCustomer(body) {
    const email_exist = await Customer.findOne({"email" : body.email }).exec()
    if(email_exist == null){
        await Customer.create(body)
        return customerLogin(body.email, body.password)
         
    }else{
        return {"message" : "email already exist"}
    }
}

// Update
async function updateCustomer(customer_id, body) {
    const customer = await Customer.findByIdAndUpdate(customer_id, {"$set" : body})
	return customer
}
// Delete
async function deleteCustomer(customer_id){
    const customer = await Customer.findByIdAndUpdate(customer_id, {"$set" : {"is_deleted" : true}})
    return {"message" : "customer deleted", "customer_name" : customer.name }
}

// Customer Login
async function customerLogin(email, password){
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        user = { "email" : email }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { 'expiresIn' : '15d'})
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)
        Token.create({"refreshToken" : refreshToken})
        return {"status" : 200 , "accessToken" : accessToken, "refreshToken": refreshToken, "user" : 'admin', "user_type" : 'admin'}
    }
    const customer = await Customer.findOne({"email" : email }).exec()
    if(customer == null){
        return { "status" : 401 } // Email not found
    }
    
    try {
        if (await bcrypt.compare(password, customer.password)){
            user = { "email" : email }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { 'expiresIn' : '15d'})
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)
            Token.create({"refreshToken" : refreshToken})
            return {"status" : 200 , "accessToken" : accessToken, "refreshToken": refreshToken, "user" : customer._id, "user_type" : customer.user_type} // Success
        } else {
            return {"status" : 401 } // Wrong password
        }
    } catch (error) {
        return { "status" : 500 } // Server error
    }

}

async function customerLogout(token){
    await Token.deleteOne({"refreshToken" : token})
    return {"status" : 204}
}
module.exports = {
    customerLogout,
    customerLogin,
    saveCustomer,
    queryAllCustomer,
    queryOneCustomer,
    updateCustomer,
    deleteCustomer
}
