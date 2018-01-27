const express = require('express');
const models = require('./models')
const sequelize = require('sequelize');
const morgan = require('morgan');

const index = require('./routes/index');
const users = require('./routes/users');
const signup = require('./routes/signup');

var app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/', index);
app.use('/users', users);
app.use('/signup', signup);


module.exports = app;
