const messageService = require("../services/messages.services")
const httpStatus = require('http-status');

const saveMessage = async (req, res) => {
    const message = await messageService.saveMessage(req.body)
    res.status(httpStatus.CREATED).send(message)
}

const getCollectorMessages = async (req, res) => {
    const messages = await messageService.getCollectorMessages(req.params.collector_id)
    res.send(messages)
}

const getCustomerMessages = async (req, res) => {
    const messages = await messageService.getCustomerMessages(req.params.customer_id)
    res.send(messages)
}

const updateMessage = async (req, res) => {
    await messageService.updateMessageList(req.body.id, req.body.message, req.body.sender)
    res.status(201).send()
}

const getMessages = async (req, res) => {
    const messages = await messageService.getMesseages(req.params.id)
    res.send(messages)
}
module.exports = { saveMessage, getCollectorMessages, getCustomerMessages, updateMessage, getMessages  }
