const express = require('express');
const statusController = require('../Controllers/novel_status');

const Router = express.Router();

Router.get('/', statusController.getNovelStatus);
module.exports = Router;
