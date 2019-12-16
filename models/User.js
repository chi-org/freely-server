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

module.exports = mongoose.model('User', User);
