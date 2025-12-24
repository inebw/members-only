const db = require("./../config/queries");

module.exports = async (req, res) => {
  const { privateKey } = req.body;
  const { id } = req.params;
  if (privateKey == process.env.PRIVATEKEY) {
    db.addToClub(id);
  }
  res.redirect("/");
};
