let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/library', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

module.exports.Author = require('./author')
module.exports.Book = require('./book')