const db = require('./../config/queries')

module.exports= async (req, res, next) => {
    req.logout((err) => {
        if (err) next(err)
        else res.redirect('/')
    })
}