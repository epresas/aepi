'use strict'


var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');

function pruebas(req, res){
    res.status(200).send({
        messsage: 'probando una accion del controlador de la api rest con mongo'
    })
}

function createUser(req, res){    
    var user = new User();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.email = req.body.email;
    user.rol = req.body.rol;

    bcrypt.hash(req.body.password, null, null, function(err, hash){
        console.log(hash)
        user.password = hash;
        user.save(function (err, user){
            if(err){
                res.status(500).send({"message":err.message});
            }
            res.status(200).send("usuario creado correcatemnre")
        });
    });

}

function getUsers(req, res){
    User.find({}, function(err, users){
        res.status(200).send(users)
    });
}

function login(req, res) {
    var username = req.body.email;
    var password = req.body.password;

    User.findOne({ email: username }, function (err, user) {
        bcrypt.compare(password, user.password, function (err, check) {
            if (check) {
                console.log("concuerda");
                res.status(200).send("Loggeado con exito");
            } else {
                console.log("no concuerda")
                res.status(400).send({"message": err.message});
            }
        });
    });
}

function insertImage(req, res) {
    var userId = req.body.id;
    var imagePath = req.files.image.path;
    console.log(imagePath);
    User.findByIdAndUpdate(userId, { image: imagePath },function (err, user) { //busco el ususario por el id y actualizo su campo image por el string que viene  en el path

    });

    res.status(200).send();
}



// function saveImage(req, res){
//     console.log(req.files);
//     res.status(200).send()
// }

// function saveUser(req, res){
//     console.log(req.body)
//     var user = new User();
//     user.name = req.body.name;
//     user.surname = req.body.surname;
//     user.email = req.body.email;
//     bcrypt.hash(req.body.password, null, null, function (err, hash){
//         user.password = hash
//         if (err){
//             return res.status(500).send(err.message)
//         }
//         user.save(function(err, user){
//             if (err){
//                 return res.status(500).send(err.message)
//             }else{
//                 return res.status(203).send();
//             }
//         });
//     });
// }

// function login(req, res){
//     var username = req.body.email
//     var password = req.body.password

//     User.findOne({"email":username}, function (err, user){
//         console.log(user);
//         bcrypt.compare(password, user.password, function (err, check){
//             console.log(req.body.getToken)
//             // return res.status(200).send(check)

//             if(eval(req.body.getToken)){
//                 let token = jwt.createToken(user);
//                 console.log(token);
//                 return res.status(200).send({"token":token})
//             }else{
//                 return res.status(200).send(user);
//             }

//         });
//     })
// }

module.exports = {
    pruebas,
    getUsers,
    createUser,
    login,
    insertImage
};