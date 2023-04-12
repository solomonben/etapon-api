const notificationService = require("../services/notification.service")
const httpStatus = require('http-status');

const saveNotif = async (req, res) => {
    console.log(req.body)
    const booking = await notificationService.saveNotif(req.body)
    res.status(httpStatus.CREATED).send(booking)
}

const getCollectorNotifs = async (req, res) => {
    const notifs = await notificationService.getCollectorNotifs(req.params.collector_id)
    res.send(notifs)
}

const getCustomerNotifs = async (req, res) => {
    const notifs = await notificationService.getCustomerNotifs(req.params.customer_id)
    res.send(notifs)
}

module.exports = { saveNotif, getCollectorNotifs, getCustomerNotifs  }
