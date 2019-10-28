const express = require('express');
const genreController = require('../Controllers/genre');

const Router = express.Router();

Router.get('/', genreController.getGenres);
Router.post('/', genreController.addGenre);

module.exports = Router;
