module.exports = async (req, res) => {
    const {id} = req.params;
    res.render('new-post', {id: id})
}