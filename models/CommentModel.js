/*
    Comment Model
        commentContent
        commentAuthor
        commentLikes (Vote count)
*/

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({

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
    
    postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, 
});


module.exports = mongoose.model('Comment', CommentSchema);
