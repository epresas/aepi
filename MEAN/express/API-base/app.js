'use strict'

var express = require('express')
var bodyparser = require('body-parser')

var app = express()

// cargar rutas
var user_routes = require('./routes/user');
var movie_routes = require('./routes/movie');


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

// rutas base
app.use('/api', [user_routes, movie_routes])

module.exports = app;
