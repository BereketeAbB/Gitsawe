const express = require('express');
const mongoose = require('express');
const mongo = require('./mongo')
const bodyParser = require("body-parser")

const app = express();


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.post('/book', mongo.RegisterBook);
app.get('/book/:id', mongo.getBook);
app.patch('/book/:id', mongo.UpdateBook)


app.listen(5500, console.log("Listening 5500"))








// mongoose.connect("mongodb://localhost:27017/Gitsawe2")
//             .then(() => console.log("Database Connection Successful"));

// const bookSchema = new mongoose.Schema({
//     title: String,
//     price: Number
// })

// const BooksN = mongoose.model('BooksN', bookSchema);


// app.post('/createBook', async (req, res)=> {
//     try {
//         // const newBook = await BooksN.create(req.body);
//         const newBook = await new BooksN(req.body)
//         await newBook.save();
//         console.log(req.body);

//         const newBook1 = BooksN.create({
//             title: 'Yaltenore Ljnet',
//             price: 440
//         });
        
//         console.log(newBook);
//         res.status(200).json({
//             status: "succeed",
//             data: {
//                 newBook,
//                 newBook1
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })


// const newBookNew = new Books({
//     title: "Live long"
// })
// newBookNew.save().then((data), console.log(data) )
// // const newBook = Books.create({
//     title: 'Yaltenore Ljnet',
//     price: 440
// },{
//     title: 'The Power of Now',
//     price: 44
// });

