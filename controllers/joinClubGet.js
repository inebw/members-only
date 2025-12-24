module.exports = (req, res) => {
    const {id} = req.params
    if (req.isAuthenticated()) {
        res.render('join-club', {id:id, user:req.user, title:'Join Private Club'})
    } else {
        res.redirect('/login')
    }
    
}