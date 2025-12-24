module.exports = (req, res) => {
    res.render('sign-up', {title:'Sign-up', user:req.user})
}