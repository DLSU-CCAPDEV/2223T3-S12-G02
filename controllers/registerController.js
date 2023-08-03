const { validationResult } = require('express-validator');
const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerController = {
    getRegister: function (req, res) {
        res.render('register');
    },

    postRegister: async function (req, res) {
        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};

            for (i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('register', details);
        }

        else {
            var userName = req.body.username;
            var email = req.body.email;
            var userpass = req.body.userpass;

            
            bcrypt.hash(userpass, saltRounds, function(err, hash) {
                var user = {
                    userName: userName,
                    userEmail: email,
                    pw: hash
                }
                var response = db.insertOne(User, user);
    
                if (response != null) {
                    res.redirect('/login');
                }
                else {
                    res.render('error');
                }
            });            
        };

    },

    getCheckUsername: async function (req, res) {

        var userName = req.query.userName;

        var result = await db.findOne(User, { userName: userName }, 'userName');
        res.send(result);

    },
    getCheckEmail: async function (req, res) {
        var userEmail = req.query.email;
        var result = await db.findOne(User, { userEmail: userEmail }, 'userEmail');
        res.send(result);
    }
}
module.exports = registerController;
