const express = require('express');
const passport = require('passport');
const models = require('./../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const route = express.Router();

route.post('/add', (req,res,next) => {
    models.Products.create(
        req.body
    ).then(results => {
        res.json(results);
    })
})
route.get('/', (req,res,next) => {
    models.Products.findAll().then(results => {
        //console.log(results)
        res.json(results);
    })
})

route.get('/:id', (req,res,next) => {
    models.Products.findAll({
        where: {UserId: req.params.id}
    }).then(results => {
        res.json(results);
    })
})


module.exports = route;