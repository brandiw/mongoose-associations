let express = require('express')
let app = express()

app.set('view engine', 'ejs')

app.use('/authors', require('./controllers/authors'))
app.use('/books', require('./controllers/books'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error')
})

app.listen(3000)