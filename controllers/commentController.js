const db = require('../models/db.js');
const Comment = require('../models/CommentModel.js');

const commentController = {
  // Method to add a new comment to a specific post
  submitComment : async function(req, res) {

    var pID = req.params.pID;
    var pComment = req.body.pComment;

    var doc = {
        commentID: Date.now(),
        commentContent: pComment,
        commentAuthor: `foobar`,//
        commentLikes: 0,
        postID: pID
    };
    
    await db.insertOne(Comment, doc);
    res.redirect(`/post/`+ pID);
  },

  // Method to update comment likes
  updateCommentLikes: async function (req, res) {
    const commentId = req.body.commentId;
    const value = req.body.value;
    const query = { commentID: commentId };
    await db.updateOne(Comment, query, { commentLikes: value });
    res.json({ updatedCount: value });
  },

  
  deleteComment: async function (req, res) {
    const commentId = req.body.commentId;
    const query = { commentID: commentId };
    await db.deleteOne(Comment, query);
    res.json({ message: 'Comment deleted successfully' });
  },
};

module.exports = commentController;
