const db = require('../Configs/db');

module.exports = {
  getNovelStatus: () => {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM novel_status`;
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
