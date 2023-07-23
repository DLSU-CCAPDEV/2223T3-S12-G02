const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');
const Comment = require('../models/CommentModel.js');

const voteController = {
    updatePostVote: async function(req, res) {
        var value = req.body.value;
        var query = {
            postID: req.body.postId
        }

        await db.updateOne(Post, query, {postLikes: value});
        res.json({updatedCount: value});
    }
}

module.exports = voteController