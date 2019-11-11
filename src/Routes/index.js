const express = require('express');
const novel = require('./novel');
const genre = require('./genre');
const status = require('./novel_status');

const Router = express.Router();

Router.use('/novel', novel);
Router.use('/genre', genre);
Router.use('/status', status);

module.exports = Router;
