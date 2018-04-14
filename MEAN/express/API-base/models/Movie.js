'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var MovieSchema = Schema({
    title: String,
    age: String,
    score: String
});

module.exports = mongoose.model('Movie', MovieSchema)