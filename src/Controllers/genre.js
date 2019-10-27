const genreModel = require('../Models/genre');

module.exports = {
  getGenres: (req, res) => {
    genreModel
      .getGenres()
      .then(result => res.json(result))
      .catch(err => res.json({ err }));
  }
};
