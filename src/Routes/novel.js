const express = require('express');
const novelController = require('../Controllers/novel');

const Router = express.Router();

Router.get('/', novelController.getNovel);
Router.post('/', novelController.addNovel);
Router.put('/:id', novelController.editNovel);
Router.delete('/', novelController.deleteNovel);

module.exports = Router;
