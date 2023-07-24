const db = require('../models/db.js');
const User = require('../models/UserModel.js');

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
        var result = await db.findOne(User, {userName: req.body.username, pw: req.body.userpass}, 'userName')

        if (result != null) {
            // Do session stuff here
            req.session.username = req.body.username;
            req.session.isLoggedIn = true;
            res.redirect(`home`);
        }
        else {
            var details = {
                error: `Username and/or Password is incorrect.`
            };
            res.render('login', details);
        }
    },
    getLogOut: function (req, res) {

        req.session.destroy();
        res.redirect(`login`);

    }
}

module.exports = loginController;