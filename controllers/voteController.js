const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');
const Comment = require('../models/CommentModel.js');

const voteController = {
    updatePostVote: async function(req, res) {
        var ID = req.body.postId;
        var value = req.body.value;

        if (await db.findOne(Post, {postID: ID}, `postID`) != null ) {

            await db.updateOne(Post, {postID: ID}, {postLikes: value});
        }
        else if (await db.findOne(Comment, {commentID: ID}, `commentID`) != null ) {
            await db.updateOne(Comment, {commentID: ID}, {commentLikes: value});
        }
        res.json({updatedCount: value});
    }
}

module.exports = voteController