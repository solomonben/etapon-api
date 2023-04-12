const trashService = require("../services/trash.services")
const httpStatus = require('http-status');


const getCityCounts = async (req, res) => {
    const counts = await trashService.getCityCounts()
    res.send(counts)
}

const getBarangayCounts = async (req, res) => {
    const counts = await trashService.getBarangayCounts(req.params.barangay)
    res.send(counts)
}



module.exports = { getBarangayCounts, getCityCounts  }
