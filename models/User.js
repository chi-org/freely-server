const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: {
        first: String,
        last: String
    },
    dateJoined: {
        type: Date,
        default: new Date()
    },
    students: [{
        student: {
            _id: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            colour: {
                type: String
            }
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

module.exports = mongoose.model('User', User);
