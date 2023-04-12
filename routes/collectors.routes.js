const express = require("express")
const router = express.Router()
const collectorController = require("../controllers/collector.controller")


router
	.get("/",collectorController.findAllCollector)
	.post("/", collectorController.createCollector)
	.get("/:collector_id", collectorController.findOneCollector)
	.put("/:collector_id", collectorController.updateCollectorInfo)
	.delete("/:collector_id", collectorController.removeCollector)

router.post('/login', collectorController.collectorLogin)
router.post('/refresh-token', collectorController.collectorRefreshToken)
router.post('/logout', collectorController.collectorLogout)

module.exports = router