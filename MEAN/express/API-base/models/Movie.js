'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var MovieSchema = Schema({
    title: String,
    year: Number,
});

module.exports = mongoose.model('Movie', MovieSchema)