const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model zdjecia z sesji

const pictureSchema = new Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Kid', pictureSchema);