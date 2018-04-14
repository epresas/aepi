'use stricts'


var express = require('express');
var MovieController = require('../controller/movie');
// var md_auth = require('../middleware/authenticated')
// var md_logs = require('../middleware/writeLog')
var api = express.Router()

// var multiparty = require('connect-multiparty')
// var md_upload = multiparty({uploadDir: './uploads/users'})


api.get('/generate-movies', MovieController.createMovie);
api.get('/movie', MovieController.findMovies);
// api.get('/movie/:id', MovieController.findMovie);


module.exports = api;