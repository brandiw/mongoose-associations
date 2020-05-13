let mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pages: Number,
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema)