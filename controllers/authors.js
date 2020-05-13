let router = require('express').Router()
let db = require('../models')

// GET /authors - fetch all the authors from the DB
router.get('/', (req, res) => {
    db.Author.find()
    .then(authors => {
        res.send(authors)
    })
    .catch(err => {
        res.render('error')
    })
})

module.exports = router