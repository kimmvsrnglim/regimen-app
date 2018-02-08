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
route.put('/edit', (req,res,next) => {
    console.log(req.body);
    let name = req.body.name;
    let price = req.body.price;
    let purchaseurl = req.body.purchaseurl;
    let promocode = req.body.promocode;
    let description = req.body.description;
    let UserId = req.body.UserId;
    let productId = req.body.id
    models.Products.update(
        {
            name: name,
            price: price,
            purchaseurl: purchaseurl,
            promocode: promocode,
            description: description,

        }, {
            where: {
                id: productId,
                UserId: UserId
            }
        }
    ).then(results => {
        res.json(results);
    })
})
route.get('/', (req,res,next) => {
    models.Products.findAll({
        
    }).then(results => {
        //console.log(results)
        res.json(results);
    })
})
route.delete('/delete', (req,res,next) => {
    let userId = req.body.userId;
    let productId = req.body.productId;
    models.Products.destroy({
        where: {
            UserId: userId,
            id: productId
        }
    }).then(results => {
        console.log(results);
        res.json(results);
    })
    
})
route.get('/:id', (req,res,next) => {
    models.Products.findAll({
        where: {UserId: req.params.id},
        order: ['id']
    }).then(results => {
        res.json(results);
    })
})


module.exports = route;