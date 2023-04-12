var cors = require('cors');

require('dotenv').config()
// Express Imports for API 
const express = require('express')
const app = express()
app.use(express.json())
// const ActivityLogs = require("nathan-activity-logging")

const { default: mongoose } = require('mongoose')


// Initialize DB
mongoose.connect(process.env.DB)

// Import routes from files
const CustomerRouter = require('./routes/customer.routes')
const CollectorRouter = require('./routes/collectors.routes')
const BookingsRouter = require('./routes/bookings.routes')
const FeedbackRouter = require('./routes/feedback.routes')
const NotificationRouter = require('./routes/notification.routes')
const TrashRouter = require("./routes/trash.routes")
const MessageRouter = require('./routes/message.routes')

app.use(cors());
app.use("/customers", CustomerRouter)
app.use("/collectors", CollectorRouter)
app.use("/bookings", BookingsRouter)
app.use("/feedback", FeedbackRouter)
app.use("/notifications", NotificationRouter)
app.use("/trashes", TrashRouter)
app.use("/messages", MessageRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT)
