const db = require('../Configs/db');

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
      let query = `INSERT INTO genres (genre, created_at, updated_at)
                  SELECT * FROM (SELECT ?, ? AS d1, ? ) AS tmp
                  WHERE NOT EXISTS (
                    SELECT genre FROM genres WHERE genre = ?
                  ) LIMIT 1`;
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
