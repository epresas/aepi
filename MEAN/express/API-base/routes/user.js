'use stricts'


var express = require('express');
var UserController = require('../controller/user');
var md_auth = require('../middleware/authenticated')
var api = express.Router()

var multiparty = require('connect-multiparty')
var md_upload = multiparty({uploadDir: './uploads/users'})


api.get('/probando-controlador', UserController.pruebas);
api.get('/user', UserController.getUsers);
api.post('/user', UserController.createUser);
api.post('/user/login', UserController.login);
api.post('/user/insert-image/:id', md_upload, UserController.insertImage);
api.delete('/user/:id', UserController.deleteUser);

// api.post('/save-image',md_upload ,UserController.saveImage);
// api.post('/login', UserController.login);



module.exports = api;