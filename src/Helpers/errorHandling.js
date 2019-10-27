module.exports = {
  errorHandling: (body, res) => {
    if (!body.title) {
      res.json({
        message: 'Title is required'
      });
    }
    if (!body.author) {
      res.json({
        message: 'Author is required'
      });
    }
    if (!body.genre) {
      res.json({
        message: 'Genre is required'
      });
    }
    if (!body.status) {
      res.json({
        message: 'Status is required'
      });
    }
  }
};
