const { Schema, model } = require('mongoose');

// схема нащей базы данных (описать, наши велосипеды)

const RentalBikes = new Schema({
    name: String,
    types: String,
    cost: Number
})

const BikeList = model('RentalBikes', RentalBikes)

module.exports = BikeList