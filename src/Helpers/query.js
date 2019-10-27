module.exports = {
  queryRead: () => {
    let query = `SELECT b.id, b.title, b.author, b.image_url, s.novel_status AS status, g.genre 
      FROM novels b 
        INNER JOIN genres g 
          ON b.genre = g.genre_id 
        INNER JOIN novel_status s 
          ON b.status = s.status_id `;

    return query;
  }
};
