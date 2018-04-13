'use strics'

var mongoose = require('mongoose');
var app =  require('./app.js');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/test', (err,res) => {
    if (err) {
        throw err;
    } else {
        console.log('Base de datos lanzada exitosamente');
        app.listen(port, function (params) {
            
        })
    }
})