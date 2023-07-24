const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const loginController = {
    getLogIn: function (req, res) {

        if (isLoggedIn) {
            res.redirect('/home');
        }

        else {

            var data = {
                isLoggedIn: false
            };
            res.render('login', data);
        }
    },
    postLogIn: function (req, res) {

        var username = req.body.username;
        var userpass = req.body.userpass;

        db.findOne(User, { userName: username }, '', function (result) {

            // if a user with `idNum` equal to `idNum` exists
            if (result) {

                var user = {
                    userName: result.userName,
                    pw: result.pw,
                    userEmail: result.email
                }

                if (result.pw == userpass) {
                    var data = {
                        isLoggedIn: true,
                        username: username
                    }
                    res.render('home', data);
                }
                else {
                    var details = {
                        isLoggedIn: false,
                        error: `ID Number and/or Password is incorrect.`
                    };
                    res.render('login', details);
                }

            }

            else {
                var details = {
                    isLoggedIn: false,
                    error: `ID Number and/or Password is incorrect.`
                };
                res.render('login', details);
            }
        });
    }
}

module.exports = loginController;