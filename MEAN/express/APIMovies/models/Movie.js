'use stricts'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var movieSchema = new Schema({
    title: String,
    year: Number,
    cast: [String],
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director' },
    rating: Number
});


module.exports = mongoose.model('Movie', movieSchema);
