let router = require('express').Router()
let db = require('../models')

// GET /books - fetch all the books from the DB
router.get('/', (req, res) => {
    db.Book.find()
    .then(books => {
        res.send(books)
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})

// GET /books/withauthor - populate the author info
router.get('/withauthor', (req, res) => {
    db.Book.find()
    .populate('writer')
    .then(books => {
        res.send(books)
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})

module.exports = router