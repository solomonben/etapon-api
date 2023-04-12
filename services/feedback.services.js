const Feedback = require("../models/Feedback")

async function saveFeedback(body) {
    const feedback = await Feedback.create(body)
    return feedback
}

async function getCollectorFeedback(id){
    const feedbacks = await Feedback.find({"collector_id" : id}).sort({'createdAt' : -1}).limit(20).exec()
    let feedback_list = []
    feedbacks.forEach(feedback => {
        feedback_list.push(feedback)
    })
	return feedback_list
}

module.exports = { saveFeedback, getCollectorFeedback }