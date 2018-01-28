const express = require('express');
const passport = require('passport');
const models = require('./models')
const sequelize = require('sequelize');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config/config.json');

const index = require('./routes/index');
const users = require('./routes/users');
const signup = require('./routes/signup');
const login = require('./routes/login');

var app = express();

app.use(express.json());
app.use(morgan('dev'));

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, done) => {
    console.log("PAYLOAD: ", jwt_payload);
    models.Users.findOne({where: {id: jwt_payload.id}}).then(response => {
        return done(null,response);
    });
}));

app.use('/', index);
app.use('/users', users);
app.use('/signup', signup);
app.use('/login', login);


module.exports = app;
