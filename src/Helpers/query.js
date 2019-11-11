module.exports = {
  queryRead: () => {
    let query = `SELECT b.id, b.title, b.author, b.image_url, b.description, g.genre , s.novel_status 
    FROM novels b 
    INNER JOIN genres g ON b.genre = g.id 
    INNER JOIN novel_status s ON b.novel_status = s.id `;

    return query;
  },
  genreQueryAdd: () => {
    let q = `INSERT INTO genres (genre, createdAt, updatedAt)
                  SELECT * FROM (SELECT ?, ? AS d1, ? ) AS tmp
                  WHERE NOT EXISTS (
                    SELECT genre FROM genres WHERE genre = ?
                  ) LIMIT 1`;
    return q;
  }
};
