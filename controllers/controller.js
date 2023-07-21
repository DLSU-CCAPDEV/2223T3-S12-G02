const controller = {

    getRoot: function(req, res) {
        res.render(`home_guest`);
    },

    redirectRoot: function(req, res) {
        res.redirect(`/`);
    },

    // TODO: check if user logged in
    getRootLogged: function(req, res) {
        res.render(`home`);
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
