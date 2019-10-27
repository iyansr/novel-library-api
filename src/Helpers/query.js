module.exports = {
  queryRead: () => {
    let query = `SELECT b.title, b.author, b.image_url, s.status_name AS status, g.genre 
      FROM novels b 
        INNER JOIN genres g 
          ON b.genre = g.genre_id 
        INNER JOIN status_name s 
          ON b.status = s.status_id `;

    return query;
  }
};
