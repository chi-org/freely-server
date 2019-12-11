const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: {
        first: String,
        last: String
    },
    dateJoined: Date,
    students: [{
        type: String
    }],
    activities: [{
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
})

module.exports = mongoose.model('User', User);
