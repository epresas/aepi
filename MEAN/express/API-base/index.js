'use strict'

var mongoose = require('mongoose');
var app = require('./app.js')
var port = 3977;

mongoose.connect('mongodb://localhost:27017/test', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("base de datos lanzada con exito");
        app.listen(port, function(){
            console.log("servidor del api rest corriendo.")
        })
    }
})

