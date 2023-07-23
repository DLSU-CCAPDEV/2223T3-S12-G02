/*
    Comment Model
        commentContent
        commentAuthor
        commentLikes (Vote count)
*/

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    commentID: { 
        type: Number,
        required: true }, 
    commentContent: {
        type: String,
        required: true
    },
    commentAuthor: {
        type: String,
        required: true
    },
    commentLikes: {
        type: Number,
        required: true
    },
    postID: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Comment', CommentSchema);
