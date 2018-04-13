var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var directorSchema = new Schema({
    name: String,
    surname: String,
    country: String,
    rating: Number
});

var Director = mongoose.model('Director', directorSchema);

module.exports = Director