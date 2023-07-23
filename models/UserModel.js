/*
    User Model
        userName
        userEmail
        userBio
        pw (password)
*/

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userBio: {
        type: String,
        required: false
    },
    pw: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
