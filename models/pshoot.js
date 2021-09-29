const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pshootSchema = new Schema({
    title: String
});

module.exports = mongoose.model('Pshoot', pshootSchema);