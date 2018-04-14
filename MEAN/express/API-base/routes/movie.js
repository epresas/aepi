'use stricts'


var express = require('express');
var MovieController = require('../controller/movie');
// var md_auth = require('../middleware/authenticated')
// var md_logs = require('../middleware/writeLog')
var api = express.Router()

// var multiparty = require('connect-multiparty')
// var md_upload = multiparty({uploadDir: './uploads/users'})

api.get('/movie', MovieController.getMovies);
api.get('/movie/:id', MovieController.getMovie);
api.put('/movie/:id', MovieController.updateMovie);
api.post('/movie', MovieController.createMovie);
api.put('/movie/:id', MovieController.updateMovie);
api.delete('/movie/:id', MovieController.deleteMovie);


module.exports = api;