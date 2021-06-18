

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchema = new Schema({
    id: String,
    name: String,
    email: String,
    date: Date,
    msg: String
});

let Query = mongoose.model('Query', newSchema, 'queries');
module.exports = { Query }