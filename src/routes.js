const express = require('express');

const recipeController = require('./controllers/recipeController');


const routes = express.Router();



routes.get('/recipe', recipeController.index);
routes.post('/recipe', recipeController.create);



module.exports = routes;