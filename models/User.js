const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'tournament-director','referee-director','team-director','field-director','volunteer-director']
        }],
        default: ['user']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);
