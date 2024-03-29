const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');
const keys = require('../../config/keys');
const router = express.Router();

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/users');

// @route POST api/users/register
// @desc Register user
// @access Public

router.post('/register', (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({ email : req.body.email }).then(user => {
        console.log("received.............", req.body);
        if(user){
            return res.status(400).json({ email : "Email already exists"});
        }
        const newUser = new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });

        //Hashing password

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
        res.send(
            `I received your POST request. This is what you sent me: `,
          );
          console.log("Received frm registration");
    });

});

//Login API

router.post('/login', (req,res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if(!user){
            return res.status(400).json({emailnotfound:"Email is not sum"});
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                //create JWT payload
                const payload = {
                    id : user.id,
                    name : user.name
                };
    
                jwt.sign(payload, keys.secretOrKey, { expiresIn : 31556926}, (err, token) => {
                    res.json({
                        success : true,
                        token : "Bearer " + token
                    });
                });
            }else{ 
                return res.status(400).json({ passwordincorrect : "Password incorrect"});
            }
        });
    
    });

    
});

router.get('/currentuser', passport.authenticate("jwt", { session : false }), (req,res) => {
    res.json({
        id : req.user.id,
        name : req.user.name,
        email : req.user.email
    });
});

module.exports = router;