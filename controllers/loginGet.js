module.exports = async (req, res) => {
  res.render("login", {user:req.user, title:'Login'});
};
