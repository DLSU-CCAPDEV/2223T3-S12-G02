/*
    Post Model
        postContent
        postAuthor
        postLikes (Vote count)
*/

var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    postID: {
        type: Number,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postAuthor: {
        type: String,
        required: true
    },
    
 
    postLikes: {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model('Post', PostSchema);
