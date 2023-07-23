const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');
const Comment = require('../models/CommentModel.js');

const postController = {

    getPost: async function(req, res) {

        var query = {postID: req.params.pID};

        var projection = `postID postTitle postContent postAuthor postLikes`;
        var commentprojection = `commentID commentContent commentAuthor commentLikes postID`;

        var result =  await db.findOne(Post, query, projection);
        var commentList = await db.findMany(Comment, query, commentprojection);
        commentList.sort((a, b) => b.commentID - a.commentID);

        if (result != null) {
            var data = {
                post: result,
                commentList: commentList
            }
            
            res.render(`post`, data);
        }
        else {
            res.redirect(`/`);
        }
    }

}

module.exports = postController;
