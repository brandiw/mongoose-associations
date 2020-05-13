let db = require('./models')

db.Book.create({
    title: 'The Windup Bird Chronicle',
    pages: 400,
    writer: '5ebc69598730833ce8012d91'
})
.then(() => {
    console.log('Created successfully!')
})
.catch(err => {
    console.log('Error!', err)
})
.finally(() => {
    process.exit()
})

// db.Author.create({
//     firstname: 'Theodore',
//     lastname: 'Seuss',
//     genre: 'Childrens',
//     address: {
//         street: '5678 Pretend Street',
//         city: 'Seattle',
//         state: 'WA',
//         zip: 98102
//     }
// })
// .then(() => {
//     process.exit()
// })
// .catch(err => {
//     console.log('error', err)
//     process.exit()
// })