const express = require('express');
const novel = require('./novel');
const genre = require('./genre');

const Router = express.Router();

Router.use('/novel', novel);
Router.use('/genre', genre);

module.exports = Router;
