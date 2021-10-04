const express = require ('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Kid = require('./models/picture')

mongoose.connect('mongodb://localhost:27017/karolinav2', {
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "problem z połączeniem:"));
db.once("open", () => {
    console.log("Baza danych podłączona");
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/dzieci', async (req,res) => {
    const kids = await Kid.find({});
    res.render('dzieci/index', { kids });
})

app.get('dzieci/new', (req,res) => {
    res.render('dzieci/index')
})

app.post('/dzieci', async (req,res) => {
const kid = new Kid(req.body.kid);
await kid.save();
res.redirect('dzieci')
})

app.listen(3000, () =>  {
    console.log('Port 3000 otwarty')
})