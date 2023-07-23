const db = require(`../models/db.js`);
const main = require(`../public/js/main.js`);
const Post = require('../models/PostModel.js');

const homeController = {

    refreshFeed: async function(req, res) {

        var projection = `postID postTitle postContent postAuthor postLikes`;

        var data = {
            isLoggedIn: true,//req.body.isLoggedIn,
            username: `foobar`,//req.body.username,
            postList: await db.findMany(Post, {}, projection)
        }

        res.render('home', data);
    },

    submitPost : function(req, res) {

        var pTitle = req.body.pTitle;
        var pContent = req.body.pContent;

        var doc = {
            postID: Date.now(),
            postTitle: pTitle,
            postContent: pContent,
            postAuthor: `foobar`,
            postLikes: 0
        };
        
        db.insertOne(Post, doc);
        res.redirect(`/home`);
    }

};

module.exports = homeController;