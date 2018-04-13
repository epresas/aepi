var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var movieSchema = new Schema({
    title: String,
    year: Number,
    cast: [String],
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director'},
    rating: Number
});


var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie