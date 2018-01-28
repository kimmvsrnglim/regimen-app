const express = require('express');
const passport = require('passport');
const models = require('./../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const route = express.Router();

//create user
const createUser = (body) => {
    let username = body.username;
    let password = body.password;
    let email = body.email
    console.log(body);
     
    return models.Users.create({
        username: username,
        password: bcrypt.hashSync(password,10),
        email: email
    }); 
    
}
//check if user exists
//add email
const checkUser = (username) => {
    console.log("USERNAME: "+username);
    return models.Users.findOne({where: {username: username}});
}

/* route.post('/register', (req,res,next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email
    if (username == null || password == null || email == null){
        res.status(204).json({"message": "required fields incomplete"});
    }
    if (username == "" || password == "" || email == ""){
        res.status(204).json({"message": "required fields incomplete"});
    }
    let userInUse = null;
    checkUser(username).then(response => {
        userInUse = response
        
        if (userInUse == null) {
            createUser(req.body).then((response) => {
                //console.log(response);
                res.json({response});
            })
        }
        else {
            console.log(response.username, response.email, response.password);
            res.json({'message': 'username already exists'});
        }
    }).catch(error => {
        console.log(error);
        res.json({'message': 'User not added'});;
    })
}) */

//login route which returns a json web token if username and password match
route.post('/', (req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;
    //get username and password from db
    models.Users.findOne({where: {username:username}}).then((response) =>{
        //return response if no record is found
        if(response == null){
            console.log("response: "+response);  
            res.status(204).json({'message': 'Bad username or password'});  
        }
        else {
            //check user password against password returned from db for username
            let test = bcrypt.compareSync(password, response.password);
            //console.log(test);
            if(test){
                let payload = {
                    id: response.id
                }
                let token = jwt.sign(payload,"y0y0",{expiresIn: 60 * 60});
                res.json({
                    message: "ok", 
                    token: token
                });
            }else {
                res.status(204).json({
                    'msg': 'Bad username or password'
                })
            }            
        }
    }).catch(err => {
        console.log(err);
        res.status(204).json({'msg': 'Bad username or password'});
    })  
});

module.exports = route;
