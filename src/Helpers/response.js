module.exports = {
  getResult: (res, result, status) => {
    const response = {
      status,
      data: result
    };
    res.json(response);
  },
  responseCreatedNovel: (res, status, body) => {
    const response = {
      status,
      message: `Succes adding`,
      data: body
    };
    res.json(response);
  },
  responseUdpateNovel: (res, status, body) => {
    const response = {
      status,
      message: 'Succes Update',
      data: body
    };
    res.json(response);
  }
};
