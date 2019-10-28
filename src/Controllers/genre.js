const genreModel = require('../Models/genre');
const moment = require('moment');
const errorHelper = require('../Helpers/errorHandling');
const responseHelper = require('../Helpers/response');

module.exports = {
  getGenres: (req, res) => {
    genreModel
      .getGenres()
      .then(result => res.json(result))
      .catch(err => res.json({ err }));
  },
  addGenre: (req, res) => {
    const date = moment().format('YYYY-MM-DD HH:mm:ss');
    const body = {
      ...req.body,
      created_at: date,
      updated_at: date
    };
    const genre = body.genre;
    genreModel
      .addGenre(genre, date, date, genre)
      .then(result => {
        if (result.affectedRows == 0) {
          res.status(409).json({
            status: 409,
            message: `Genre ${genre} already exist`
          });
        } else {
          responseHelper.responseCreatedNovel(res, 200, body);
        }
      })
      .catch(err => {
        errorHelper.insertGenreErrorHandling(body, res);
        console.log(err);
      });
  }
};
