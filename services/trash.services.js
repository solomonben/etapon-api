// Import models
const Trash = require("../models/Trash")

// Create
async function saveTrash(body) {
    const booking = await Trash.create(body)
    return booking
}
async function getCityCounts() {
    const january = {
        "biodegradable" : await Trash.count({"month" : "January", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "January", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "January", "category": "recyclable"})
    }
    const february = {
        "biodegradable" : await Trash.count({"month" : "February", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "February", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "February", "category": "recyclable"})
    }
    const march = {
        "biodegradable" : await Trash.count({"month" : "March", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "March", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "March", "category": "recyclable"})
    }
    const april = {
        "biodegradable" : await Trash.count({"month" : "April", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "April", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "April", "category": "recyclable"})
    }
    const may = {
        "biodegradable" : await Trash.count({"month" : "May", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "May", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "May", "category": "recyclable"})
    }
    const june = {
        "biodegradable" : await Trash.count({"month" : "June", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "June", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "June", "category": "recyclable"})
    }
    const july = {
        "biodegradable" : await Trash.count({"month" : "July", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "July", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "July", "category": "recyclable"})
    }
    const august = {
        "biodegradable" : await Trash.count({"month" : "August", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "August", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "August", "category": "recyclable"})
    }
    const september = {
        "biodegradable" : await Trash.count({"month" : "September", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "September", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "September", "category": "recyclable"})
    }
    const october = {
        "biodegradable" : await Trash.count({"month" : "October", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "October", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "October", "category": "recyclable"})
    }
    const november = {
        "biodegradable" : await Trash.count({"month" : "November", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "November", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "November", "category": "recyclable"})
    }
    const december = {
        "biodegradable" : await Trash.count({"month" : "December", "category" : "biodegradable"}),
        "non_biodegradable" : await Trash.count({"month" : "December", "category" : "non_biodegradable"}),
        "recyclable" : await Trash.count({"month" : "December", "category": "recyclable"})
    }
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
