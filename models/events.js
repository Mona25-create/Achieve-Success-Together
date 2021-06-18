

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchema = new Schema({
    id: String,
    title: String,
    date: Date,
    description: String,
    imageURL: String
});

let Event = mongoose.model('Event', newSchema);
module.exports = { Event }