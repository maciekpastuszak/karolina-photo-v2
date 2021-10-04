const mongoose = require('mongoose');
const Kid = require('../models/picture')

mongoose.connect('mongodb://localhost:27017/karolinav2', {
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "problem z połączeniem:"));
db.once("open", () => {
    console.log("Baza danych podłączona");
});

const Pshoots = [
    {
        title: 'Sesja Alka i Natana',
        image: 'https://res.cloudinary.com/dqcadja0y/image/upload/v1623222115/KarolinaPhoto/uiwnaos69hr5g7h5ygal.jpg'
    },
    {
        title: 'Sesja Majki i Kajki',
        image: 'https://res.cloudinary.com/dqcadja0y/image/upload/v1623221171/KarolinaPhoto/ugis0aymc4aqh9m6yyjn.jpg'
    },
]
const seedDB = async () => {
    await Kid.deleteMany({});
    Kid.insertMany(Pshoots)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
    }

    seedDB();