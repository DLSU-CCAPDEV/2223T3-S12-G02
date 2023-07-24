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
        commentAuthor: req.session.username,
        commentLikes: 0,
        postID: pID
    };
    
    await db.insertOne(Comment, doc);
    res.redirect(`/post/`+ pID);
  },

  updateComment: async function(req, res) {
    var query = {commentID: req.params.cID};
    await db.updateOne(Comment, query, {commentContent: req.body.eComment});
    console.log(`/post/` + req.params.cID);
    res.redirect(`/post/` + req.params.pID);
  },
  
  deleteComment: async function (req, res) {
    const commentID = req.body.commentID;
    const query = { commentID: commentID };
    await db.deleteOne(Comment, query);
    res.json({ message: 'Comment deleted successfully' });
  },
};

module.exports = commentController;
