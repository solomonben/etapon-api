const customerService = require("../services/customer.services")
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken')
const Token = require("../models/Token")
const findAllCustomer = async (req, res) => {
    const customers = await customerService.queryAllCustomer()
    res.send(customers)
}

const findOneCustomer = async (req, res) => {
    try {
        const customer = await customerService.queryOneCustomer(req.params.customer_id)
        res.send(customer) 
    } catch (error) {
        res.send(error).status(400);
    }
    
}
const createCustomer = async (req, res) => {
    const customer = await customerService.saveCustomer(req.body)
    res.status(httpStatus.CREATED).send(customer)
}

const updateCustomerInfo = async (req, res) => {
    const customer = await customerService.updateCustomer(req.params.customer_id, req.body)
    res.send(customer)
}

const removeCustomer = async (req, res) => {
    const customer = await customerService.deleteCustomer(req.params.customer_id)
    res.send(customer)
}

const customerLogin = async(req, res) => {
    const validate = await customerService.customerLogin(req.body.email, req.body.password)
    
    if (validate.status == 200){
        res.status(validate.status).json(validate).end()
    }else {
        res.status(validate.status).end()
    }
}

const customerRefreshToken = async(req, res) => {
    const refreshToken = req.headers.token
    if (refreshToken==null) return res.sendStatus(401)

    const token_exist = await Token.findOne({"refreshToken" : refreshToken }).exec()
    if (token_exist==null) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) =>{
        if (err) return res.sendStatus(403)
        
        const accessToken = jwt.sign({"email" : user.email}, process.env.ACCESS_TOKEN_SECRET, { 'expiresIn' : 15})
        return res.status(200).json({"accessToken" : accessToken}).end()
    })
}

const customerLogout = async (req, res) => {
    logout_customer = await customerService.customerLogout(req.headers.token)
    res.sendStatus(logout_customer.status)
}

module.exports = {
    customerLogout,
    customerRefreshToken,
    customerLogin,
    createCustomer,
    findAllCustomer,
    findOneCustomer,
    removeCustomer,
    updateCustomerInfo,
}