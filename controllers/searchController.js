const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');

const searchController = {

    refreshFeed: async function(req, res) {

        var key = req.query.pSearchKey;

        if (key != null) {
            var escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            var regex = new RegExp(escapedKey, 'i'); // 'i' flag for case-insensitive search

            var query = {
                $or: [
                    { postTitle: { $regex: regex } },
                    { postContent: { $regex: regex } },
                    { postAuthor: { $regex: regex } },
                ]
            }

            var projection = `postID postTitle postContent postAuthor postLikes`;

            // Retrieve the postList without sorting
            var postList = await db.findMany(Post, query, projection);

            // Sort the postList in descending order based on the createdAt field (newest posts first)
            postList.sort((a, b) => b.postID - a.postID);

        }

        var data = {
            isLoggedIn: true,//req.body.isLoggedIn,
            username: `foobar`,//req.body.username,
            postList: postList
        }

        res.render('search', data);
    }
}

module.exports = searchController;