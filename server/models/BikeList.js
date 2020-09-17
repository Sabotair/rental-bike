const { Double } = require('mongodb');
const { Schema, model } = require('mongoose');

// схема нащей базы данных (описать, наши велосипеды)
const BikeListShema = new Schema({
    name: String,
    types: String,
    cost: Number
})

const BikeList = model('bikes', BikeListShema)

module.exports = BikeList