const Message = require("../models/Messages")
const Chat = require("../models/Chat")

async function saveMessage(body) {
    const check_message = await Message.findOne(body).exec()
    if (!check_message){
        return await Message.create(body)
    }else {
        return check_message
    }
}

async function getCustomerMessages(id){
    const message = await Message.find({"customer_id" : id}).sort({'updatedAt' : -1}).limit(20).exec()
    return message
}


async function getCollectorMessages(id){
    const message = await Message.find({"collector_id" : id}).sort({'updatedAt' : -1}).limit(20).exec()
    return message
}

async function updateMessageList(id, message, sender){
    await Message.findByIdAndUpdate(
        {_id: id},
        {$set : {last_message : {message : message, sender: sender}}}
        )
}

async function getMesseages(id){
    const query = await Chat.find({"message_id":id}).sort({'createdAt' : -1}).limit(30).exec()
    return query
}
module.exports = { saveMessage, getCustomerMessages, getCollectorMessages, updateMessageList, getMesseages }