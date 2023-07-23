const db = require('../models/db.js');
const Comment = require('../models/CommentModel.js');

const commentController = {
  // Method to retrieve all comments for a specific post
  getCommentsForPost: async function (req, res) {
    const postId = req.params.postId;
    // Query to fetch comments related to the given postId
    const query = { postID: postId };
    const projection = 'commentID commentContent commentAuthor commentLikes';
    const comments = await db.findMany(Comment, query, projection);
    res.json(comments);
  },

  // Method to add a new comment to a specific post
  addCommentToPost: async function (req, res) {
    const postId = req.body.postId;
    const commentContent = req.body.commentContent;
    const commentAuthor = 'Foo.Bar'; // Replace with the actual author of the comment
    const commentLikes = 0; // Initialize likes to 0 for a new comment
    const commentData = {
      postID: postId,
      commentContent: commentContent,
      commentAuthor: commentAuthor,
      commentLikes: commentLikes,
    };

    const insertedComment = await db.insertOne(Comment, commentData);
    res.json(insertedComment);
  },

  // Method to update comment likes
  updateCommentLikes: async function (req, res) {
    const commentId = req.body.commentId;
    const value = req.body.value;
    const query = { commentID: commentId };
    await db.updateOne(Comment, query, { commentLikes: value });
    res.json({ updatedCount: value });
  },

  // Method to delete a comment
  deleteComment: async function (req, res) {
    const commentId = req.body.commentId;
    const query = { commentID: commentId };
    await db.deleteOne(Comment, query);
    res.json({ message: 'Comment deleted successfully' });
  },
};

module.exports = commentController;
