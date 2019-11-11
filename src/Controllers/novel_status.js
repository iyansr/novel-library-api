const statusModel = require('../Models/novel_status');

module.exports = {
  getNovelStatus: (req, res) => {
    statusModel
      .getNovelStatus()
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }
};
