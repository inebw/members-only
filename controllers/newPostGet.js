module.exports = async (req, res) => {
  if (req.isAuthenticated()) {
    const { id } = req.params;
    res.render("new-post", { id: id, user: req.user, title: "Add New Post" });
  } else {
    res.redirect("/login");
  }
};
