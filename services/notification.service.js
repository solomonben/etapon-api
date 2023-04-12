const Notification = require("../models/Notification")

async function saveNotif(body) {
    console.log(body)
    const notification = await Notification.create(body)
    return notification
}

async function getCustomerNotifs(id){
    const notifs = await Notification.find({"customer_id" : id}).sort({'createdAt' : -1}).limit(10).exec()
    return notifs
}

async function getCollectorNotifs(id){
    const notifs = await Notification.find({"collector" : id}).sort({'createdAt' : -1}).limit(10).exec()
    return notifs
}
module.exports = { saveNotif, getCustomerNotifs, getCollectorNotifs }