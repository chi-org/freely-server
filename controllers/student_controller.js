const mongoose = require('mongoose');
const User = require('../models/User');


export let getStudents = (req, res) => {
    User.findOne({_id: req.user._id}, (err, doc) => {
        if (err) {
            res.json({error: err});
        } else {
            res.json(doc.students)
        }
    })
};

export let newStudent = (req, res) => {
    User.updateOne({_id: req.user._id}, { $push: { students: {_id: mongoose.Types.ObjectId(), name: req.body.name, color: req.body.color}}}, (err, doc) => {
        if (err) {
            res.json({error: err})
        } else {
            res.json(doc)
        }
    })
};

// Update student

// Delete student

export let deleteStudent = (req, res) => {
    User.updateOne({_id: req.user._id}, { $pull: {students: {_id: req.body.deleteId}}}, {safe: true}, (err, doc) => {
        if (err) {
            res.json({error: err})
        } else {
            res.json(doc)
        }
    })
}
