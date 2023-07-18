const express = require('express');

const controller = require('../controllers/controller.js');

const app = express();


/* // Reference from original code //

app.get(`/`, controller.getRoot);
app.get(`/login`, controller.redirectRoot);

app.post(`/checkAcct`, controller.checkAcct);

*/

module.exports = app;
