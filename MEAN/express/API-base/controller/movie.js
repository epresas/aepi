'use strict'


var Movie = require('../models/Movie');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');

function pruebas(req, res){
    console.log(req.headers.holaa);
    res.status(200).send({
        messsage: 'movie'
    })
}


function createMovie(req, res){
    var movie = new Movie()
    movie.title = "adsddsds";
    movie.age = "dsdsd";
    movie.save(function(err, data){
        if (err) throw err;
        return res.status(203).send("created")
    });
}
function getMovies(req, res){
    Movie.find({}, function (err, data){
        return res.status(200).send(data)
    });
}
function getMovie(req, res){
    var movie_id = req.params.id
    Movie.findById(movie_id, function (err, data){
        return res.status(200).send(data)
    });
}
function insertImage(req, res){
    console.log(req.files.image.path)
    return res.status(200).send()
}

module.exports = {
    pruebas,
    createMovie,
    getMovies,
    getMovie,
    insertImage,
};