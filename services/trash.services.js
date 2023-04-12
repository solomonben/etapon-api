// Import models
const Trash = require("../models/Trash")

// Create
async function saveTrash(body) {
    const booking = await Trash.create(body)
    return booking
}
async function getCityCounts() {
    const january = await Trash.count({"month" : "January"})
    const february = await Trash.count({"month" : "February"})
    const march = await Trash.count({"month" : "March"})
    const april = await Trash.count({"month" : "April"})
    const may = await Trash.count({"month" : "May"})
    const june = await Trash.count({"month" : "June"})
    const july = await Trash.count({"month" : "July"})
    const august = await Trash.count({"month" : "August"})
    const september = await Trash.count({"month" : "September"})
    const october = await Trash.count({"month" : "October"})
    const november = await Trash.count({"month" : "November"})
    const december = await Trash.count({"month" : "December"})
    body = {
        "january" : january,
        "february" :february,
        "march" : march,
        "april" : april,
        "may" : may,
        "june" : june,
        "july" : july,
        "august" : august,
        "september" : september,
        "october" : october,
        "november" : november,
        "december" : december,
    }
    return body
}

async function getBarangayCounts(barangay) {
    const january = await Trash.count({"month" : "January", "address.barangay" : barangay})
    const february = await Trash.count({"month" : "February", "address.barangay" : barangay})
    const march = await Trash.count({"month" : "March", "address.barangay" : barangay})
    const april = await Trash.count({"month" : "April", "address.barangay" : barangay})
    const may = await Trash.count({"month" : "May", "address.barangay" : barangay})
    const june = await Trash.count({"month" : "June", "address.barangay" : barangay})
    const july = await Trash.count({"month" : "July", "address.barangay" : barangay})
    const august = await Trash.count({"month" : "August", "address.barangay" : barangay})
    const september = await Trash.count({"month" : "September", "address.barangay" : barangay})
    const october = await Trash.count({"month" : "October", "address.barangay" : barangay})
    const november = await Trash.count({"month" : "November", "address.barangay" : barangay})
    const december = await Trash.count({"month" : "December", "address.barangay" : barangay})
    body = {
        "january" : january,
        "february" :february,
        "march" : march,
        "april" : april,
        "may" : may,
        "june" : june,
        "july" : july,
        "august" : august,
        "september" : september,
        "october" : october,
        "november" : november,
        "december" : december,
    }
    return body
}
module.exports = {
    saveTrash,
    getCityCounts,
    getBarangayCounts
}
