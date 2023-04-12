const express = require("express")
const router = express.Router()
const trashController = require("../controllers/trash.controller")

router.get("/", trashController.getCityCounts)

router.get("/barangay/:barangay", trashController.getBarangayCounts)

module.exports = router