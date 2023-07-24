const express = require('express');

const controller = require('../controllers/controller.js');

const homeController = require('../controllers/homeController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const voteController = require('../controllers/voteController.js');
const searchController = require('../controllers/searchController.js');
const profileController = require('../controllers/profileController.js');

const app = express();

app.get(`/`, homeController.refreshFeed);
app.get(`/home`, homeController.refreshFeed);
app.post(`/submitPost`, homeController.submitPost);

app.get(`/post/:pID`, postController.getPost);
app.post(`/post/:pID`, commentController.submitComment);
app.post(`/update-vote`, voteController.updatePostVote);
app.post(`/delete-post`, postController.deletePost);

app.get(`/home_logged`, controller.getRoot);

app.get(`/search`, searchController.refreshFeed);

app.get(`/login`, controller.getLogin);

app.get(`/register`, controller.getRegister);

app.post(`/register`, controller.postRegister);

app.get(`/profile`, controller.getProfile);

app.get(`/profile/:userName`, profileController.getPosts); 

/* // Reference from original code //

app.get(`/`, controller.getRoot);
app.get(`/login`, controller.redirectRoot);

app.post(`/checkAcct`, controller.checkAcct);

*/
app.post('/comments/:commentId/likes', commentController.updateCommentLikes);
app.delete('/comments/:commentId', commentController.deleteComment);


module.exports = app;
