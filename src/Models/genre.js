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
  }
};
