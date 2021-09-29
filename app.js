const express = require ('express');
const path = require('path');
const mongoose = require('mongoose');
const Pshoot = require('./models/pshoot')

mongoose.connect('mongodb://localhost:27017/karolinav2', {
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "problem z połączeniem:"));
db.once("open", () => {
    console.log("Baza danych podłączona");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/dzieci', async (req,res) => {
    const dzieci = await Pshoot.find({});
    res.render('dzieci/index', {dzieci})
})

app.listen(3000, () =>  {
    console.log('Port 3000 otwarty')
})