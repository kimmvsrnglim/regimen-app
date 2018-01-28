const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const models = require('./../models');

//create user
const createUser = (body) => {
    console.log("BODY");
    console.log(body);
    let username = body.username;
    let password = body.password;
    let firstname = body.firstname;
    let lastname = body.lastname;
    let age = body.age;

     
    return models.Users.create({
        username: username,
        password: bcrypt.hashSync(password,10),
        firstname: firstname,
        lastname: lastname,
        age: age
    }); 
    
}
//check if user exists
//add email
const checkUser = (username) => {
    console.log("USERNAME: "+username);
    return models.Users.findOne({where: {username: username}});
}

router.get('/', (req, res, next) => {
  res.json({test: "it works"});
});

router.post('/', (req, res, next) => {
    //console.log(req.body);
    console.log("POSTING");
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let age = req.body.age;
    console.log("stuff; "+username,password,firstName,lastName,age);

    if (username == null || password == null){
        res.status(204).json({"message": "required fields incomplete"});
    }
    if (username == "" || password == ""){
        res.status(204).json({"message": "required fields incomplete"});
    }
    let userInUse = null;
    checkUser(username).then(response => {
        userInUse = response
        console.log(userInUse);
        
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
})

module.exports = router;
