const feedbackService = require("../services/feedback.services")
const httpStatus = require('http-status');

const saveFeedback = async (req, res) => {
    const feedback = await feedbackService.saveFeedback(req.body)
    res.status(httpStatus.CREATED).send(feedback)
}

const getCollectorFeedback = async (req, res) => {
    const feedback = await feedbackService.getCollectorFeedback(req.params.collector_id)
    res.send(feedback)
}


module.exports = { saveFeedback, getCollectorFeedback  }
