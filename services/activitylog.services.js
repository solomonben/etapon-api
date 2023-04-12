const Logs = require('../models/ActivityLogs')


async function logging (model, performed_on){
    // Catch saving activities
    model.post('save', async doc => {
        body = {
            "performed_on":performed_on,
            "performed_by": doc._id, // created_by
            "operation_type": "save",
            "created_object": doc
        }
        await Logs.create(body)
    })
    model.pre('updateOne', async (doc, before) => {
        body = {
            "performed_on":performed_on,
            "performed_by": doc._id, // updated_by
            "operation_type": "updateOne",
            "updated_object": doc,
            "before_object" : before

        }
        await Logs.create(body)
    })
    model.pre('findOneAndUpdate', async (doc, before) => {
        body = {
            "performed_on":performed_on,
            "": doc._id, // updated_by
            "operation_type": "findOneAndUpdate",
            "updated_object": doc,
            "before_object" : before

        }
        await Logs.create(body)
    })
    /* Still need to think through on deleltes
    model.pre('remove', async doc => {
        body = {
            "performed_on":performed_on,
            "performed_by": doc._id, // updated_by
            "operation_type": "remove",
            "updated_object": doc

        }
        await Logs.create(body)
    })
    */
}

module.exports.logging = logging

