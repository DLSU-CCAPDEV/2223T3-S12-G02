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
                isLoggedIn: true,//req.body.isLoggedIn,
                username: `foobar`,//req.body.username,
                post: result,
                commentList: commentList
            }
            
            res.render(`post`, data);
        }
        else {
            res.redirect(`/`);
        }
    },

    deletePost: async function(req, res) {

        var query = {postID: req.body.postId};

        if ( await db.deleteOne(Post, query) != null) {
            res.json({deletion: true});
        }
        else {
            console.log(`Error: Cannot delete post`);
        }
    },

    getEditor: async function(req, res) {

        var query = {postID: req.params.pID};

        var projection = `postID postTitle postContent postAuthor postLikes`;

        var result =  await db.findOne(Post, query, projection);

        if (result != null) {
            var data = {
                isLoggedIn: true,//req.body.isLoggedIn,
                username: `foobar`,//req.body.username,
                post: result
            }
            
            res.render(`post_edit`, data);
        }

    },

    updatePost: async function(req, res) {
        var query = {postID: req.params.pID};

        await db.updateOne(Post, query, {postTitle: req.body.pTitle, postContent: req.body.pContent});
        res.redirect(`/post/` + req.params.pID);
    }
}

module.exports = postController;
