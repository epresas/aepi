'use stricts'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var directorSchema = new Schema({
    name: String,
    surname: String,
    country: String,
    rating: Number
});

module.exports = mongoose.model('Director', directorSchema);
