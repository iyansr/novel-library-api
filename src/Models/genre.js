const db = require('../Configs/db');
const genreQuery = require('../Helpers/query');

module.exports = {
  getGenres: () => {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM genres';
      db.query(query, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  addGenre: (genre, c, u, whereGenre) => {
    return new Promise((resolve, reject) => {
      let query = genreQuery.genreQueryAdd();
      db.query(query, [genre, c, u, whereGenre], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
