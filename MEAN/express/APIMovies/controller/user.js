'use strict'


var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');




function createUser(req, res) {
    

    var user = new User();

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.email = req.body.email;
    user.rol = req.body.rol;
    bcrypt.hash(req.body.password, null, null, function (err, hash) {
        console.log(hash);
        user.password = hash; 
    })
    

    // user.save(function (err, user) {
    //     if (err) {
    //         res.status(500).send({"messsage": err.messsage});
            
    //     }
    //     res.status(200).send("Usuario creado con exito")
    // });
}

function getUsers(req, res) {
    User.find({}, function (err, users) {
        res.status(200).send(users)
        
    });
}
module.exports = {
  
    createUser,
    getUsers
};