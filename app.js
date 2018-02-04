var express = require('express');
var app = express();
var db = require('./db');
var request = require('request');
var path = require('path');
var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
app.set('views', path.join(__dirname, '/public'));

module.exports = app;