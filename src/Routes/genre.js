const express = require('express');
const genreController = require('../Controllers/genre');

const Router = express.Router();

Router.get('/', genreController.getGenres);

module.exports = Router;
