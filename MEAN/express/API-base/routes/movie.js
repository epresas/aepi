'use stricts'


var express = require('express');
var MovieController = require('../controller/movie');
var md_auth = require('../middleware/authenticated')
var api = express.Router()

var multiparty = require('connect-multiparty')
// var md_upload = multiparty({uploadDir: './uploads/users'})

var md_upload = multiparty({uploadDir: './uploads/movies'})
api.post('/movie', MovieController.createMovie);
api.get('/movie',[md_auth.ensureAuth], MovieController.getMovies);
api.get('/movie/:id', MovieController.getMovie);
api.post('/movie/insert-image/:id',[md_upload], MovieController.insertImage);


module.exports = api;