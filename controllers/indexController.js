const db = require('./../config/queries')

module.exports = async (req, res) => {
  const posts = await db.getPosts()
  res.render("index", { title: "Members Only", user:req.user, posts: posts});
};
