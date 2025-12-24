module.exports = async (req, res) => {
  if (!req.isAuthenticated()) {
    const errorMessage = req.session.messages[req.session.messages.length - 1]
    res.render("login", {user:req.user, title:'Login', errors:[errorMessage]});
  } else {
    res.redirect('/')
  }
};