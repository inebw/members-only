const db = require("./pool");

async function addUser(username, password) {
  await db.query("INSERT INTO users (username, password) values ($1, $2)", [
    username,
    password,
  ]);
  const { rows } = await db.query("select * from users;");
  console.log(rows);
}

async function getUser(username) {
  const { rows } = await db.query("SELECT * FROM USERS WHERE username = $1", [
    username,
  ]);
  return rows[0];
}

async function addPost(title, message, addedOn, user_id) {
  await db.query(
    `
        INSERT INTO posts 
        (title, message, added_on, user_id)
        VALUES
        ($1, $2, $3, $4)`,
    [title, message, addedOn, parseInt(user_id)]
  );
}

async function getPosts() {
  const { rows } = await db.query(`SELECT p.*, u.username FROM posts AS p
                                    INNER JOIN users AS u
                                    ON u.id = p.user_id;`);
  return rows;
}

async function deletePost(id) {
    await db.query('DELETE FROM posts WHERE id = $1', [parseInt(id)])
}

module.exports = {
  addUser,
  addPost,
  getPosts,
  deletePost,
};
