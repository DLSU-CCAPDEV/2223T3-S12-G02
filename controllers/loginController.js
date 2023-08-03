const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const bcrypt = require('bcrypt');

const loginController = {
    getLogIn: function (req, res) {

        if (req.session.isLoggedIn) {
            res.redirect('/home');
        }
        else {
            res.render('login');
        }
    },
    postLogIn: async function (req, res) {

        console.log("post login");

        var user = req.body.username;
        var pw = req.body.userpass;

        var result = await db.findOne(User, {userName: user}, 'userName pw');
        console.log("found one");

        if(result)
        {
            bcrypt.compare(pw, result.pw, function(err, equal)  {

                if (equal){
                    req.session.username = user;
                    req.session.isLoggedIn = true;
                    res.redirect(`home`);
                }
                else
                {
                    var details = {
                        error: `Username and/or Password is incorrect.`
                    };
                    res.render('login', details);
                }
            });
        }
        
    },
    getLogOut: function (req, res) {

        req.session.destroy();
        res.redirect(`login`);

    }
}

module.exports = loginController;