'use stricts'


var express = require('express');
var UserController = require('../controller/user');
var md_auth = require('../middleware/authenticated')
var md_logs = require('../middleware/writeLog')
var api = express.Router()

var multiparty = require('connect-multiparty')
var md_upload = multiparty({uploadDir: './uploads/users'})

api.get('/probando-controlador', UserController.pruebas);


module.exports = api;