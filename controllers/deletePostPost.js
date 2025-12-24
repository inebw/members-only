const db = require("./../config/queries");

module.exports = async (req, res) => {
    const {id } = req.params;
    await db.deletePost(id);
    res.redirect('/');
}