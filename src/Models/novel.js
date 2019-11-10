const db = require("../Configs/db");
const queryHelpers = require("../Helpers/query");

module.exports = {
  getNovel: req => {
    return new Promise((resolve, reject) => {
      let query = queryHelpers.queryRead();

      const existingParam = ["genre", "status", "title", "author"].filter(
        field => req.query[field]
      );

      if (existingParam.length) {
        query += "WHERE ";
        query += existingParam
          .map(field => {
            if (field === "genre") {
              field = "g.id";
            }
            if (field === "status") {
              field = "s.id";
            }

            return `${field} LIKE ? `;
          })
          .join(" AND ");
        query += "ORDER BY b.id ASC";
      } else {
        query += "ORDER BY b.id ASC";
      }

      db.query(
        query,
        existingParam.map(field => req.query[field] + "%"),
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  getNovelByID: id => {
    return new Promise((resolve, reject) => {
      const query = queryHelpers.queryRead()

      db.query(`${query} WHERE b.id = ?` , [id], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
  addNovel: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO novels SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  editNovel: (body, id) => {
    return new Promise((resolve, reject) => {
      let query = `UPDATE novels SET ? WHERE id = ?`;
      db.query(query, [body, id], (err, response) => {
        if (!err) {
          console.log(query);
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteNovel: id => {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM novels WHERE id = ?";
      db.query(query, [id], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
