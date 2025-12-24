module.exports = (req, res) => {
    const {id} = req.params
    res.render('join-club', {id:id, user:req.user, title:'Join Private Club'})
}