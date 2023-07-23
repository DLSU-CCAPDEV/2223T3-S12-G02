const express = require('express');

const controller = require('../controllers/controller.js');

const homeController = require('../controllers/homeController.js');

const app = express();

app.get(`/`, homeController.refreshFeed);
app.get(`/home`, homeController.refreshFeed);
app.post(`/post`, homeController.submitPost);

app.get(`/home_logged`, controller.getRoot);

app.get(`/search`, controller.getSearch);

app.get(`/login`, controller.getLogin);

app.get(`/register`, controller.getRegister);

app.post(`/register`, controller.postRegister);

app.get(`/post`, controller.getPost);

app.get(`/profile`, controller.getProfile);

/* // Reference from original code //

app.get(`/`, controller.getRoot);
app.get(`/login`, controller.redirectRoot);

app.post(`/checkAcct`, controller.checkAcct);

*/

module.exports = app;
