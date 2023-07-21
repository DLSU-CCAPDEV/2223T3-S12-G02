const express = require('express');

const controller = require('../controllers/controller.js');

const app = express();

app.get(`/`, controller.getRoot);
app.get(`/home`, controller.redirectRoot);

app.get(`/home_logged`, controller.getRoot);

app.get(`/search`, controller.getSearch);

app.get(`/login`, controller.getLogin);

app.get(`/register`, controller.getRegister);

app.get(`/post`, controller.getPost);

app.get(`/profile`, controller.getProfile);

/* // Reference from original code //

app.get(`/`, controller.getRoot);
app.get(`/login`, controller.redirectRoot);

app.post(`/checkAcct`, controller.checkAcct);

*/

module.exports = app;
