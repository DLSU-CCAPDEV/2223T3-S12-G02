const express = require('express');

const controller = require('../controllers/controller.js');

const homeController = require('../controllers/homeController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const voteController = require('../controllers/voteController.js');
const searchController = require('../controllers/searchController.js');
const profileController = require('../controllers/profileController.js');
const registerController = require('../controllers/registerController.js');
const validation = require('../helpers/validation.js');
const loginController = require('../controllers/loginController.js');
const editProfileController = require('../controllers/editProfileContoller.js');

const app = express();

app.get(`/`, homeController.refreshFeed);
app.get(`/home`, homeController.refreshFeed);
app.post(`/submitPost`, homeController.submitPost);
app.get(`/post/:pID`, postController.getPost);
app.post(`/post/:pID`, commentController.submitComment);
app.post(`/update-vote`, voteController.updatePostVote);
app.get(`/edit-post/:pID`, postController.getEditor);
app.post(`/edit-post/:pID`, postController.updatePost);
app.post(`/delete-post`, postController.deletePost);
app.post(`/delete-comment`, commentController.deleteComment);
app.post(`/post/:pID/edit-comment/:cID`, commentController.updateComment);
app.get(`/home_logged`, controller.getRoot);
app.get(`/search`, searchController.refreshFeed);
app.get(`/register`, registerController.getRegister);
app.post(`/register`, validation.registerValidation(), registerController.postRegister);
app.get('/getCheckUsername', registerController.getCheckUsername);
app.get('/getCheckEmail', registerController.getCheckEmail);
app.get('/logout', loginController.getLogOut);
app.get('/login', loginController.getLogIn);
app.post('/login', loginController.postLogIn);
app.get(`/profile`, controller.getProfile);
app.get(`/profile/:userName`, profileController.getProfile); 
app.get(`/edit_profile/:userName`, editProfileController.getProfile);
app.post(`/edit_profile/:userName`, editProfileController.updateProfile);
app.get(`/about-us`, homeController.getAbout);

module.exports = app;
