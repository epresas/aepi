
var mongoose = require('mongoose');

var Movie = require('./Movie');
var Director = require('./Director');
var dbOperations = require('./dbOperations');

// Mongodb connection
mongoose.connect("mongodb://admin:ednmj.281211@ds157833.mlab.com:57833/pelis", function (err) {
    if (err) {
        console.log("error")
    }
    else{
        console.log("conectado");
    }
});

dbOperations.createMovie();