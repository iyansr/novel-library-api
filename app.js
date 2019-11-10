require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./src/Routes');
const cors =  require('cors')
const app = express();
const port = 3367 || process.env.PORT;

app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router);

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to Novel API 🎉 '
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

module.exports = app;
