const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const ScoresSchema = new Schema({
    team1: {
        type: String,
    },
    team2: {
        type: String,
    },
    category: {
        type: String,
    },
    venue: {
        type: String,
    },
    result: {
        type: String,
    },
    points: {
        type: Number,
    },
    
    isFinal: {
        type: Boolean,
        deafult: true
    }
});


const Scores = mongoose.model('scores',ScoresSchema);

module.exports = Scores;