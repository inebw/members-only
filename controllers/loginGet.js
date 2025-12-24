module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
    res.render("login", {user:req.user, title:'Login'});
  } else {
    res.redirect('/')
  }
};
