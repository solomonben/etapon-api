const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customer.controller")
const Middlewares = require("../middlewares/authentication.middleware")

router
	.get("/", Middlewares.authenticateToken ,customerController.findAllCustomer)
	.post("/" , customerController.createCustomer)
	.get("/:customer_id", Middlewares.authenticateToken, customerController.findOneCustomer)
	.put("/:customer_id", Middlewares.authenticateToken, customerController.updateCustomerInfo)
	.delete("/:customer_id", Middlewares.authenticateToken, customerController.removeCustomer)

router.post('/login', customerController.customerLogin)
router.post('/refresh-token', customerController.customerRefreshToken)
router.post('/logout', customerController.customerLogout)

module.exports = router