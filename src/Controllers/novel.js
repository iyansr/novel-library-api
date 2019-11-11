const novelModel = require('../Models/novel');
const errorHandling = require('../Helpers/errorHandling');
const responseHelper = require('../Helpers/response');
const moment = require('moment');

module.exports = {
  getNovel: (req, res) => {
    novelModel
      .getNovel(req)
      .then(result =>
        result.length >= 1
          ? responseHelper.getResult(res, result, 200)
          : res.status(404).json({
              status: 404,
              message: 'Cannot Find Spesific Novel'
            })
      )
      .catch(err => console.log(err));
  },
  getNovelByID: (req, res) => {
    const id = parseInt(req.params.id);
    novelModel
      .getNovelByID(id)
      .then(result => responseHelper.getResult(res, result, 200))
      .catch(err => console.log(err));
  },
  addNovel: (req, res) => {
    let date = moment().format('YYYY-MM-DD HH:mm:ss');
    let body = {
      ...req.body,
      createdAt: date,
      updatedAt: date
    };

    novelModel
      .addNovel(body)
      .then(result => {
        responseHelper.responseCreatedNovel(res, 201, body);
        console.log(result);
      })
      .catch(err => {
        errorHandling.insertNovelErrorHandling(body, res);
        console.log(err);
      });
  },
  editNovel: (req, res) => {
    let date = moment().format('YYYY-MM-DD HH:mm:ss');
    let body = {
      ...req.body,
      id: parseInt(req.params.id),
      genre: parseInt(req.body.genre),
      novel_status: parseInt(req.body.novel_status),
      updatedAt: date
    };
    novelModel
      .editNovel(body, body.id)
      .then(result => {
        result.affectedRows === 0
          ? res.status(404).json({
              status: 404,
              message: 'Cannot Find & Edit Spesific Novel'
            })
          : responseHelper.responseUdpateNovel(res, 200, body);
        console.log(result);
      })
      .catch(err => {
        errorHandling.insertNovelErrorHandling(body, res);
        console.log(err);
      });
  },
  deleteNovel: (req, res) => {
    let id = parseInt(req.params.id);

    novelModel
      .deleteNovel(id)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({
            status: 404,
            message: `Cannot find id ${id}`
          });
        }
        res.json({
          status: 200,
          message: 'Succes Delete '
        });
        console.log(result);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
