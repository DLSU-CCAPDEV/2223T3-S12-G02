const db = require(`../models/db.js`);
const Post = require('../models/PostModel.js');
const Comment = require('../models/CommentModel.js');

const postController = {

    getPost: async function(req, res) {

        var query = {postID: req.params.pID};

        var projection = `postID postTitle postContent postAuthor postLikes`;

        var result =  await db.findOne(Post, query, projection);

        if (result != null) {
            var data = {
                post: result
            }
            
            res.render(`post`, data);
        }
        else {
            res.redirect(`/`);
        }
    }

}

module.exports = postController;
