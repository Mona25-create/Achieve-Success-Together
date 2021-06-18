let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchema = new Schema({
    id: String,
    note: String,
    date: Date
    
});

let note = mongoose.model('note', newSchema, 'notices');
module.exports = { note }