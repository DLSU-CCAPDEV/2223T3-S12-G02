const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const loginController = {
    getLogIn: function (req, res) {

        if (req.body.isLoggedIn) {
            res.redirect('/home');
        }

        else {
            var data = {
                isLoggedIn: false
            };
            res.render('login', data);
        }
    },
    postLogIn: async function (req, res) {
        var result = await db.findOne(User, {userName: req.body.username, pw: req.body.userpass}, 'userName')

        if (result != null) {
            // Do session stuff here
            res.redirect(`home`);
        }
        else {
            var details = {
                isLoggedIn: false,
                error: `Username and/or Password is incorrect.`
            };
            res.render('login', details);
        }
    }
}

module.exports = loginController;