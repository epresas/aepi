'use strict'


var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');

function pruebas(req, res){
    console.log(req.headers);
    console.log(req.body);
    console.log(req.params);

    res.status(200).send({
        messsage: 'probando una accion del controlador de la api rest con mongo'
    })
}

module.exports = {
    pruebas,
};