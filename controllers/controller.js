const db = require('../models/db.js');

const controller = {

    /* Note:
        home_guest.hbs is probably not needed anymore.
    */
    getRoot: function(req, res) {
        const data = {
            isLoggedIn: false,
            username: `banana`
        }
        res.render(`home`, data);
    },

    redirectRoot: function(req, res) {
        res.redirect(`/`);
    },

    getSearch: function(req, res) {
        res.render(`search`);
    },

    getLogin: function(req, res) {
        res.render(`login`);
    },

    getRegister: function(req, res) {
        res.render(`register`);
    },

    // Register Logic Here
    postRegister: function(req, res) {
        res.redirect(`/`);
    },

    getPost: function(req, res) {
        res.render(`post`);
    },

    getProfile: function(req, res) {
        res.render(`profile`);
    }

    /* // Reference from original code //
    getRoot: function(req, res) {
        res.render(`login`);
    },

    redirectRoot: function(req, res) {
        res.redirect(`/`);
    },

    checkAcct: function(req, res) {
        var email = req.body.email;
        var password = req.body.pw;

    res.render(`profile`, {email: email});
    }
    */

}

module.exports = controller;
