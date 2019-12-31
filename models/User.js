const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const passportLocalMoongoose = require('passport-local-mongoose')

let User = new Schema({
    name: {
        first: String,
        last: String
    },
    username: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: new Date()
    },
    students: [{
            _id: {
                type: Schema.Types.ObjectId
            },
            name: {
                type: String,
                required: true
            },
            color: {
                type: String
            }
    }],
    activities: [{
        _id: String,
        name: String,
        textContent: String,
        date: Date,
        dateCreated: Date,
        dateCompleted: Date,
        students: [{
            type: String
        }],
        assets: [{
            type: String
        }]
    }]
});

User.plugin(passportLocalMoongoose);

module.exports = mongoose.model('User', User);
