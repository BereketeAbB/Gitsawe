const mongoose = require('mongoose')

const DB = mongoose 
            .connect("mongodb://localhost:27017/GitsaweFeed")
            .then(() => console.log("Database Connection Successful"));

// database Schema
const BookSchema = new mongoose.Schema({
    Date1: Number,
    Month1: Number,

    MezmurCh: Number,
    MezmurStart: Number,
    MezmurEnd: Number,

    Book1: String,
    B1Ch: Number,
    B1start: Number,
    B1end: Number,

    Book2: String,
    B2Ch: Number,
    B2start: Number,
    B2end: Number,

    Book3: String,
    B3Ch: Number,
    B3start: Number,
    B3end: Number,

    ActsCh: Number,
    ActsStart: Number,
    ActsEnd: Number,

})


// new mongoose.Schema({
//     title: {
//         type: String,
//         // required: true
//     },
//     chapter: {
//         type: Number,
//         // required: true
//     }
// })

const Book = mongoose.model('Book', BookSchema);




exports.RegisterBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body)


        console.log(newBook);
        res.status(201).json({
            success: "Added to DB",
            data: {
                newBook
            }
        })
    } catch (err) {
        console.log(err);
    }
}

exports.getBook = async (req, res) => {
    try {
        const bk = await Book.findOne({_id: req.params.id});

        console.log(bk);
        res.status(200).json({
            status: "Success",
            data: {
                bk
            }
        })

    } catch (err) {
        console.error(err);
    }
}

exports.UpdateBook = async (req, res) => {
    try {
        const bk = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        console.log(bk);
        // if (bk === null){
        //         return res.send(200).json({
        //         status: "Data not found"
        //         })
        //     } else {
                 res.send(200).json({
                status: "Success",
                data: {
                    bk
                }
            }) 
            // }

    } catch (err) {
        console.log(err);
    }
}