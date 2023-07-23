const db = require('../models/db.js');
const Post = require('../models/PostModel.js');

const controller = {

    /* Note:
        home_guest.hbs is probably not needed anymore.
    */
    getRoot: function(req, res) {
        const data = {
            isLoggedIn: true,
            username: `foobar`
        }
        res.render(`home`, data);
    },

    redirectRoot: function(req, res) {
        res.redirect(`/home`);
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
    getProfile: function(req, res) {
        res.render(`profile`);
    }
}

module.exports = controller;
