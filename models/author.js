let mongoose = require('mongoose')

let addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: Number
})

let authorSchema = new mongoose.Schema({
    firstname: String,
    lastname: {
        type: String,
        required: true
    },
    genre: String,
    address: addressSchema
})

module.exports = mongoose.model('Author', authorSchema)