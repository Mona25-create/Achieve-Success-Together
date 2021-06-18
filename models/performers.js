

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchema = new Schema({
    id1: String,
    name1: String,
    id2: String,
    name2: String,
    id3: String,
    name3: String
    
});

let Performer = mongoose.model('Performer', newSchema, 'performers');
module.exports = { Performer }