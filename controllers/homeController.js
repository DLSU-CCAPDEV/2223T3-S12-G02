const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');

const homeController = {

    refreshFeed: async function(req, res) {

        var projection = `postID postTitle postContent postAuthor postLikes`;

        // Retrieve the postList without sorting
        var postList = await db.findMany(Post, {}, projection);

        // Sort the postList in descending order based on the createdAt field (newest posts first)
        postList.sort((a, b) => b.postID - a.postID);

        var data = {
            isLoggedIn: req.session.isLoggedIn,
            username: req.session.username,
            postList: postList
        }

        res.render('home', data);
    },

    submitPost : async function(req, res) {

        var pTitle = req.body.pTitle;
        var pContent = req.body.pContent;

        var doc = {
            postID: Date.now(),
            postTitle: pTitle,
            postContent: pContent,
            postAuthor: `foobar`,
            postLikes: 0
        };
        
        await db.insertOne(Post, doc);
        res.redirect(`/`);
    }

};

module.exports = homeController;