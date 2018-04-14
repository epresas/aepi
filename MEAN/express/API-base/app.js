'use strict'

var express = require('express')
var bodyparser = require('body-parser')
var swaggerJSDoc = require('swagger-jsdoc');

var app = express()

// cargar rutas
var user_routes = require('./routes/user')
var movie_routes = require('./routes/movie')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

// configurar cabeceras

// rutas base
app.use('/api', user_routes)
app.use('/api', movie_routes)


// app.get('/swagger.json', function(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
//   });

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/midata', user_routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;
