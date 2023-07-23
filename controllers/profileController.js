const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');
const User = require(`../models/UserModel.js`);

const profileController = {

	getPosts: async function(req, res) {

	var query = {postAuthor: req.query.userName};
        var projection = `postID postTitle postContent postAuthor postLikes`;

        var postList = await db.findMany(Post, query, projection);

        postList.sort((a, b) => b.postID - a.postID);

        var data = {
        	isLoggedIn: true,
        	userName: req.body.userName,
        	userBio: req.body.userBio,
        	postList: postList
        }
        
        res.render('profile', data);
    }

}

module.exports = profileController;
