'use strict' //meter instruccioones nuevos estandares de js

var mongoose = require('mongoose');
var app = require('./app.js')
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://admin:admin@ds223009.mlab.com:23009/test-aepi', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("base de datos lanzada con exito");
        app.listen(port, function(){
            console.log("servidor del api rest corriendo.")
        })
    }
})

// var swaggerTools = require('swagger-tools');
// var YAML = require('yamljs');
// var swaggerDoc = YAML.load('openapi.yaml');
// swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
//     // Serve the Swagger documents and Swagger UI
//     app.use(middleware.swaggerUi());
//   });
